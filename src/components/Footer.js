import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer bg-neutral text-neutral-content items-center p-4 text-white">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.26.82-.577v-2.172c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.304.763-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.005.404 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.872.119 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.624-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .319.219.694.824.576C20.565 21.795 24 17.298 24 12 24 5.373 18.627 0 12 0z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.423.405a4.92 4.92 0 0 1 1.748 1.142 4.92 4.92 0 0 1 1.142 1.748c.165.453.35 1.253.405 2.423.059 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.423a4.92 4.92 0 0 1-1.142 1.748 4.92 4.92 0 0 1-1.748 1.142c-.453.165-1.253.35-2.423.405-1.267.059-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.423-.405a4.92 4.92 0 0 1-1.748-1.142 4.92 4.92 0 0 1-1.142-1.748c-.165-.453-.35-1.253-.405-2.423-.059-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.423a4.92 4.92 0 0 1 1.142-1.748 4.92 4.92 0 0 1 1.748-1.142c.453-.165 1.253-.35 2.423-.405C8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.333.014 7.053.072 5.772.13 4.709.293 3.79.622a7.465 7.465 0 0 0-2.708 1.637 7.465 7.465 0 0 0-1.637 2.708c-.33.919-.492 1.982-.55 3.263C-.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.281.22 2.344.55 3.263a7.465 7.465 0 0 0 1.637 2.708 7.465 7.465 0 0 0 2.708 1.637c.919.33 1.982.492 3.263.55C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.281-.058 2.344-.22 3.263-.55a7.465 7.465 0 0 0 2.708-1.637 7.465 7.465 0 0 0 1.637-2.708c.33-.919.492-1.982.55-3.263.058-1.281.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.22-2.344-.55-3.263a7.465 7.465 0 0 0-1.637-2.708 7.465 7.465 0 0 0-2.708-1.637c-.919-.33-1.982-.492-3.263-.55C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 6.162 6.162A6.169 6.169 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 3.999-3.999A4.006 4.006 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
}
