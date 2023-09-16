import BarGraph from "./BarGraph";
import DownloadIcon from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <div className="grid grid-cols-2 gap-7 mt-7">
        <ol class="relative border-l  border-gray-700 ml-9 mb-6">
          <li class="mb-10" data-aos="zoom-in">
            <span class="absolute flex items-center justify-center w-6 h-6   rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3  text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold  text-white ml-28">
            &nbsp;&nbsp;&nbsp;JavaScript Essentials 1 (JSE)
            </h3>
            <time class="block pt-1 pb-3  text-sm font-normal leading-none  text-gray-500">
              Completed on March 9th, 2023
            </time>
            <p class="mb-4 text-base font-normal  text-gray-400">
            The graduate of the JavaScript Essentials 1 (JSE) course, provided by Cisco Networking Academy®in collaboration with
OpenEDG JavaScript Institute.
            </p>
            <a
              href="https://drive.google.com/file/d/1EVmp1aYT5rZIppll-TXndz4w5zsZTy6-/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          <li class="mb-10" data-aos="zoom-out" data-aos-delay="700">
            <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                class="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 class="mb-1 text-lg font-semibold text-white">
            Complete JAVASCRIPT with HTML5,CSS3 

            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-500">
              Completed on Feb 16th, 2023
            </time>
            <p class="text-base font-normal text-gray-400">
            </p>
            <a
              href="https://www.udemy.com/certificate/UC-fd4f1d24-875a-4bf2-9b77-1300dfd51c23/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center px-4 py-2 mt-5 text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              Download Certificate
            </a>
          </li>
          
        </ol>

        <div className="flex flex-col text-center" data-aos="slide-up">
          <div className="text-3xl font-bold py-3">My Skills</div>
          <div className="ml-16 flex flex-col gap-8 mt-6">
            <BarGraph name={"Laravel"} percent={70} />
            <BarGraph name={"React"} percent={75} />
            <BarGraph name={"MySql"} percent={80} />
            <BarGraph name={"MongoDB"} percent={55} />
            <BarGraph name={"HTML/CSS"} percent={85} />
            <BarGraph name={"SQL"} percent={65} />
            <BarGraph name={"Git, Github, Gitlab"} percent={60} />
            <BarGraph name={"JavaScript"} percent={40} />
            <BarGraph name={"WordPress"} percent={60} />
          </div>

          <a
            href={require("../../assets/files/CV_2023072916034778.pdf")}
            download={"Said Boussif CV"}
            class="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg  focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
          >
            Download CV <DownloadIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
