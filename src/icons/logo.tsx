// icon:asterisk | Lucide https://lucide.dev/ | Lucide
import * as React from "react";

function IconLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M12 6v12M17.196 9L6.804 15M6.804 9l10.392 6" />
    </svg>
  );
}

export default IconLogo;
