import Header from "./header";
import Footer from "./footer";

//TODO
interface MainLayoutProps {
    (children: any): any
}

const MainLayout: MainLayoutProps = ({children}) => {
    //const route = useRouter();
    //TODO Need ?
    // const home = route.pathname === '/'

    return (
        <>
          <Header/>
            {/*{!home && (*/}
            {/*    <div>*/}
            {/*        <Link href="/">← Back to home</Link>*/}
            {/*    </div>*/}
            {/*)}*/}
            {children}
          <Footer/>
        </>
    );
};

export default MainLayout;