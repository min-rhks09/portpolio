import { TOKEN,DATABASE_ID } from "@/config";

export async function getServerSideProps() {

    const options = {
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
                    "direction": "ascending"
                }
            ],
            page_size: 100
        })
      };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectNames = projects.results.map((aProject) =>(
        aProject.properties.Name.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects}, // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
    }
}