/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image';

export default function ProjectCard(props) { 
    return (
        <>
          <div className="project bg-white rounded border-indigo-200 border-2 ring ring-indigo-50 px-6 py-4 m-2">
            <div className="pb-2 flex justify-between">
              <div className="title font-bold text-lg text-gray-700 ">
                {props.title}
              </div>
              <div className="icons flex space-x-2">
                <a href={props.github} target="_blank">
                  <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 text-gray-600 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>  
                </a>
                <a href={props.link} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                </a>
              </div>
            </div>
            {props.piplelineImageLink && (
              <div className="pipelineImage pb-3 relative">
                <a href={props.pipelineLink} className="sm:w-full sm:h-full text-left" target="_blank">
                  <img src={props.piplelineImageLink} alt="Pipeline Status" />
                </a>
              </div>
            )}
            
            <div className="description text-gray-600 lg:h-10">{props.description}</div>
            {props.tags && (
              <div className='tags pt-3'>
                {props.tags.map(tag => <div className='inline-block border border-gray-200 px-2 py-1 bg-blue-50 mr-2 mt-1 rounded-md text-xs uppercase font-medium tracking-wider'>{tag} </div>)}
              </div>
            )}
          </div>
        </>
    )
}