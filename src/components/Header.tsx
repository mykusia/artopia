"use client"
import Container from "@/common/Container";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";

function Header() {
    const pathname = usePathname();

    return(
        <header className="absolute top-0 left-0 w-full bg-transparent text-white z-50">
            <Container>
                <div className="flex items-center justify-between ">
                    <Link href="/" className="font-bold text-4xl">Atropia</Link>
                    <nav>
                        <ul className="font-semibold text-xl flex items-center justify-end gap-16">
                            {links.map((link) => {
                                return (
                                    <li 
                                    key={link.id}
                                    className={clsx(
                                        "py-4 px-2",
                                        link.path === pathname ? "bg-cyan-900/50" : ""
                                    )}>
                                        <Link href={link.path}>{link.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <Link href="/sing_in" className="my-[47px] py-[20px] px-[80px] font-semibold border border-[#A259FF] bg-[#A259FF] text-white">Sing in</Link>
                </div>
            </Container>
        </header>
    )
}

export default Header;

const links = [
    {
        id: 1,
        path: "/discover",
        title: "Discover",
    },
    {
        id: 2,
        path: "/forum",
        title: "Forum",
    },
    {
        id: 3,
        path: "/news",
        title: "News",
    },
    {
        id: 4,
        path: "/blog",
        title: "Blog",
    },

]