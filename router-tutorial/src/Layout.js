import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const goArticles = () => {
        navigate('/articles', {replace: true});
    }
    return (
        <div>
            <header
                style={{
                    background: "#f8f8f8",
                    padding: "16px",
                    fontSize: "24px",
                }}
            >
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
