import Link from 'next/link';
import clsx from 'clsx';

type SidebarItemProps = {
  link: {
    title: string;
    href: string;
  };
  active?: boolean;
};

const SidebarItem = ({ link, active }: SidebarItemProps) => {
  const { title, href } = link;

  return (
    <div className="flex h-16 items-center justify-between px-8">
      <Link
        href={href}
        className={
          clsx(
            'text-black capitalize',
            { 'text-blue-600': active }
          )
        }
      >
        {title}
      </Link>
    </div>
  );
};

export default SidebarItem;
