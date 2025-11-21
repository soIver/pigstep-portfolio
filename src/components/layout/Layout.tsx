import AppRoutes from '../../routes';
import MainNavbar from './Navbar.tsx';
import Footer from './Footer.tsx';

export default function Layout() {

    return (
        <>
            <MainNavbar />
            <main className="min-vh-100">
                <AppRoutes />
            </main>
            <Footer />
        </>
    );
}