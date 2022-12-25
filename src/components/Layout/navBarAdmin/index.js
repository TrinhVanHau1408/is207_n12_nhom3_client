import Sidebar from './navBar';
function DefaultLayout({ children }) {
    return (
        <div>
            <div className="container">
                <Sidebar />

                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
