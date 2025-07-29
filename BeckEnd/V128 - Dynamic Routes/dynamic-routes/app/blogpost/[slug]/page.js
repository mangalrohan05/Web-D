export default function Page({params}){
    throw new Error("my Error");
    return <div>My Post: {params.slug}</div>
}