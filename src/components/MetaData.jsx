// React 19 moves <title> and <meta> rendered anywhere in the tree into <head>
const MetaData = ({ title, description, keywords }) => {
    return (
        <>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
        </>
    );
};

export default MetaData;
