import Link from 'next/link'
import { useRouter } from "next/router";

export default function ActiveLink(props) {
    const router = useRouter();

    const defaultClass = "mx-1 px-2 sm:px-6  py-2 text-sm font-medium uppercase tracking-widest rounded hover:text-primary text-center transition-all ease-linear duration-100"

    const activeClass = "text-primary";
    const inActiveClass = "text-gray-500";

  return (
    <Link {...props}><a className={router.pathname == props.href 
        ? defaultClass + " " + activeClass
        : defaultClass + " " + inActiveClass
    }>{props.text}</a></Link>
  )
}