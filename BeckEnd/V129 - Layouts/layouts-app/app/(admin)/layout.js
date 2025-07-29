export const metadata = {
    title: "Admin Portal",
    description: "Working with Next.js in Admin",
};

export default function AdminLayout({ children }) {
    return (
        <>
        <span>Admin Bar</span>
        { children }
        </>
    );
}