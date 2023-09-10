import { Heading } from "@components/ui/heading/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Page not found',
}

export default function NotFound(){
    return <Heading title="404 - Page not Found"/>
}