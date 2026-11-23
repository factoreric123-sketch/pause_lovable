import { getRoute } from "@/prerender-routes";
import { formatBlogDate } from "@/lib/blog-dates";

interface PostDatesProps {
  path: string;
  showModified?: boolean;
  className?: string;
}

export default function PostDates({ path, showModified = false, className = "" }: PostDatesProps) {
  const { datePublished, dateModified } = getRoute(path);
  if (!datePublished) return null;

  return (
    <div className={`flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground ${className}`}>
      <span>
        {showModified && "Published "}
        <time dateTime={datePublished}>{formatBlogDate(datePublished)}</time>
      </span>
      {showModified && dateModified && dateModified !== datePublished && (
        <span>
          Updated <time dateTime={dateModified}>{formatBlogDate(dateModified)}</time>
        </span>
      )}
    </div>
  );
}