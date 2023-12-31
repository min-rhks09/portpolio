import Layout from "@/components/Layout/page";
import Head from 'next/head'
import { TOKEN,DATABASE_ID } from "@/config";


export default function Project({projects}){
    return(
        <Layout>
            {/* <Head>
                <title>빡코딩 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}
            <h1 className="text-4xl font-bold sm:text-6xl">
                총 프로젝트 :
                <span className="pl-4 text-blue-500"></span>
            </h1>
            <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
                {projects.results.map((aProject) => (
                <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
            </div>
        </Layout>
    )
}

export async function getData() {

    const option = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "descending"
                }
            ],
            page_size: 100
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, option)

    const projects = await res.json()

    const projectNames = projects.res.map((aProject) =>(
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}
    
