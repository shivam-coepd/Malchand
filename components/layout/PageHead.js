import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "MALCHAND INTERNATIONAL REALTY - Hospitality Business Investments"}
                </title>
            </Head>
        </>
    )
}

export default PageHead