import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { query } from "@/lib/db";
import { Users, Megaphone, Images, BookOpen } from "lucide-react";

export default async function DashboardPage() {
  // Fetch some basic stats safely. We use try/catch since tables might not exist yet.
  let noticesCount = 0, usersCount = 0, slidesCount = 0, coursesCount = 0;
  
  try {
    const [noticesRes, usersRes, slidesRes, coursesRes] = await Promise.all([
      query('SELECT COUNT(*) FROM "Notice"'),
      query('SELECT COUNT(*) FROM "User"'),
      query('SELECT COUNT(*) FROM "Slide"'),
      query('SELECT COUNT(*) FROM "Course"'),
    ]);
    
    noticesCount = parseInt(noticesRes.rows[0].count, 10);
    usersCount = parseInt(usersRes.rows[0].count, 10);
    slidesCount = parseInt(slidesRes.rows[0].count, 10);
    coursesCount = parseInt(coursesRes.rows[0].count, 10);
  } catch (error) {
    console.error("Database connection or table error on dashboard:", error);
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <Card className="bg-white border-[#ddd] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#111]">Total Notices</CardTitle>
            <div className="p-2 bg-[#f5f5f5] rounded-md border border-[#ddd]">
              <Megaphone className="h-4 w-4 text-[#003399]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#111]">{noticesCount}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-[#ddd] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#111]">Carousel Slides</CardTitle>
            <div className="p-2 bg-[#f5f5f5] rounded-md border border-[#ddd]">
              <Images className="h-4 w-4 text-[#003399]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#111]">{slidesCount}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-[#ddd] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#111]">Admin Users</CardTitle>
            <div className="p-2 bg-[#f5f5f5] rounded-md border border-[#ddd]">
              <Users className="h-4 w-4 text-[#003399]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#111]">{usersCount}</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white border-[#ddd] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-[#111]">Courses</CardTitle>
            <div className="p-2 bg-[#f5f5f5] rounded-md border border-[#ddd]">
              <BookOpen className="h-4 w-4 text-[#003399]" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#111]">{coursesCount}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
