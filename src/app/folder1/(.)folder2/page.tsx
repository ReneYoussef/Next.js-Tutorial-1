
//when you to shown the interecepted page you create a folder with the same name as the page you want to intercept starting with a (.)
// and then you create a page.tsx file inside that folder
// this will intercept the page and show the content of this page instead of the original page
//f2 is the target page that we want to intercept
//f1 is the parent page that will link to f2
// the intercepted page will be shown when you navigate to /folder1/folder2 via the link in f1
//when you navigate to /folder1/folder2, the content of this page will be shown instead of the original f2 page
//when refreshing the page, the original f2 page will be shown

export default function InterceptedF2(){
    return <h1>(.)Intercepted F2 page</h1>
}