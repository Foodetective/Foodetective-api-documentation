import { useEffect } from "react";
import { CodeBlock, TableOfContents } from "../../components";

export const getStaticProps = async () => {
  const res = await fetch('https://api.staging.foodtekk.com/api/docs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }});
  const data = await res.json();

  return {
    props: { apis: data }
  }
};

const toc = [
  {
    id: "or-user-access-token",
    level: 2,
    title: "or User Access Token"
  },
  {
    id: "or-user-access-token",
    level: 3,
    title: "or User Access Token"
  },
]

export default function Apis({ apis }) {

  useEffect(() => {
    console.log(apis.paths, 'data');
  }, []);


  return (
    <>
      <div className="grid grid-cols-2 gap-1 w-full">
        <div className="w-1/2">1st col</div>
        <div className="w-1/2">2nd col
          {/* <CodeBlock>
            
          </CodeBlock> */}
        </div>
      </div>
      <TableOfContents toc={[apis.paths]} />
  </>
  )
}