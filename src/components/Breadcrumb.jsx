import React from "react";
import { Link } from "react-router-dom"; // remove if not using router

const Breadcrumb = ({ items = [] }) => {
  if (!items.length) return null;

  return (
    <nav className="flex items-center gap-2 text-sm text-text-secondary">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {index !== 0 && (
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
            )}

            {isLast || !item.href ? (
              <span className="font-semibold text-text-primary">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
