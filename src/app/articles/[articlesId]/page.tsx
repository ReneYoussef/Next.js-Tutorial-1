"use client";
import Link from "next/link"
import {use} from "react";
export default  function NewsArticle({params,searchParams}:{
     params: Promise<{articlesId: string}>,
     searchParams:Promise<{lang?:"en"|"fr"}>
}
   
){

    const {articlesId} = use(params);
    const {lang} =  use(searchParams);
return(
    <div>
        <h1>Nes Article {articlesId}</h1>
        <p>Reding in {lang}</p>


        <div>
            <Link href={`/articles/${articlesId}?lang=en`}>English</Link>
            <Link href={`/articles/${articlesId}?lang=fr`}>french</Link>
        </div>
    </div>
)
}