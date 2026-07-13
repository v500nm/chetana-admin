import { query as dbQuery } from "./db";
import { NextResponse } from "next/server";

export class ApiHandler {
  private tableName: string;
  private primaryKey: string;

  constructor(tableName: string, primaryKey: string = "id") {
    this.tableName = tableName;
    this.primaryKey = primaryKey;
  }

  // GET ALL
  async getAll(req: Request) {
    try {
      const { searchParams } = new URL(req.url);
      const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : null;
      const order = searchParams.get("order") === "asc" ? "ASC" : "DESC";

      let query = `SELECT * FROM ${this.tableName} ORDER BY created_at ${order}`;
      if (limit) {
        query += ` LIMIT ${limit}`;
      }

      const res = await dbQuery(query);
      return NextResponse.json({ success: true, data: res.rows }, { status: 200 });
    } catch (error: any) {
      console.error(`GET ${this.tableName} Error:`, error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }

  // GET ONE
  async getOne(id: string | number) {
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE ${this.primaryKey} = $1`;
      const res = await dbQuery(query, [id]);

      if (res.rows.length === 0) {
        return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: res.rows[0] }, { status: 200 });
    } catch (error: any) {
      console.error(`GET ${this.tableName} (One) Error:`, error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }

  // POST (Create)
  async create(req: Request) {
    try {
      const body = await req.json();
      
      const keys = Object.keys(body);
      const values = Object.values(body);
      
      if (keys.length === 0) {
        return NextResponse.json({ success: false, error: "Empty request body" }, { status: 400 });
      }

      const placeholders = keys.map((_, i) => `$${i + 1}`).join(", ");
      const columns = keys.join(", ");

      const query = `INSERT INTO ${this.tableName} (${columns}) VALUES (${placeholders}) RETURNING *`;
      const res = await dbQuery(query, values);

      return NextResponse.json({ success: true, data: res.rows[0] }, { status: 201 });
    } catch (error: any) {
      console.error(`POST ${this.tableName} Error:`, error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }

  // PUT (Update)
  async update(id: string | number, req: Request) {
    try {
      const body = await req.json();
      
      const keys = Object.keys(body);
      const values = Object.values(body);
      
      if (keys.length === 0) {
        return NextResponse.json({ success: false, error: "Empty request body" }, { status: 400 });
      }

      const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
      
      const query = `UPDATE ${this.tableName} SET ${setClause} WHERE ${this.primaryKey} = $${keys.length + 1} RETURNING *`;
      
      // Append ID to values array for the WHERE clause
      const res = await dbQuery(query, [...values, id]);

      if (res.rows.length === 0) {
        return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
      }

      return NextResponse.json({ success: true, data: res.rows[0] }, { status: 200 });
    } catch (error: any) {
      console.error(`PUT ${this.tableName} Error:`, error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }

  // DELETE
  async delete(id: string | number) {
    try {
      const query = `DELETE FROM ${this.tableName} WHERE ${this.primaryKey} = $1 RETURNING *`;
      const res = await dbQuery(query, [id]);

      if (res.rows.length === 0) {
        return NextResponse.json({ success: false, error: "Not found" }, { status: 404 });
      }

      return NextResponse.json({ success: true, data: res.rows[0] }, { status: 200 });
    } catch (error: any) {
      console.error(`DELETE ${this.tableName} Error:`, error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }
}
