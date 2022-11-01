//@ts-nocheck
import React from "react";
import { CodeBlock } from "../../components";

export const getStaticProps = async () => {
  const res = await fetch('https://api.staging.foodtekk.com/api/docs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }});
  const data = await res.json();

  return {
    props: { apis: data.paths }
  }
};

const code = `
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by data.json() call
  });
`;
export default function Apis({ apis }) {

  console.log(apis)

  const returnColor = ( query: string) => {
    switch(query) {
      case 'POST':
        return (
          <p className="pt-6 text-blue-500">{`${query.toLocaleString().toLocaleUpperCase()}`}</p>
        )
      case 'DELETE':
        return (
        <p className="pt-6 text-red-500">{`${query.toLocaleString().toLocaleUpperCase()}`}</p>
        )
        case 'PUT':
          return (
          <p className="pt-6 text-yellow-500">{`${query.toLocaleString().toLocaleUpperCase()}`}</p>
          )
          case 'PATCH':
            return (
            <p className="pt-6 text-orange-500">{`${query.toLocaleString().toLocaleUpperCase()}`}</p>
            )
            case 'GET':
              return (
              <p className="pt-6 text-green-500">{`${query.toLocaleString().toLocaleUpperCase()}`}</p>
              )
      default:
        return (
          <p className="pt-6 ">{`${query.toLocaleString().toLocaleUpperCase()}`}</p>
          )
    }
  }

  return (
    <><div className="flex flex-col overflow-y-scroll">
      {Object.entries(apis).map((item, index) => {
        const id = Object.keys(item[1]);
        return (
          <div key={index} id={item[0]} className="grid grid-cols-2 gap-1 border-b-[1px]">
            <div className="w-1/2">
              <h2 className="text-black-500 text-3xl pl-6 font-bold">{item[1][id]?.description}</h2>
              <p className="text-black-500 text-lg last:border-b-[1px] pl-6">Parameters</p>
              {item[1][id]?.parameters?.map((params, index) => (
                <>
                  <h2 className="pl-6 text-gray-500 italic text-md">{params.description}</h2>
                  <div key={index} className="flex flex-row pb-2">
                    <p className="pl-6 border-b-[1px] w-full pb-2">{params.name ? params.name : 'No parameters'}
                      {params.required ?
                        <span className="ml-4 bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Required</span>
                        :
                        <span className="ml-4 bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Optional</span>}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="w-full p-10">
              <CodeBlock data-language={'javascript'}>
              {returnColor(id.toLocaleString().toLocaleUpperCase())}{item[0]}
                {code}
              </CodeBlock>
            </div>
          </div>
        );
      })}
    </div>
    </>
  )
}