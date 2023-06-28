type ContainerProps = {
    children: React.ReactNode,
}

function Container({children}: ContainerProps) {
    return (
        <div className="px-4 mx-auto max-w-screen-xl container">{children}</div>
    );
}

export default Container;