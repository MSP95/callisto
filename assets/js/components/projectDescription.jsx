import React from 'react';
import {connect} from 'react-redux';

function Description(props) {
  console.log(props.name);
  const descp = () => {

    switch (props.name) {
      case "Spotify ++":
        return (<div>
          <ul>
            <li>
              Used Spotify's API to build an application which supports multiple login roles such as artists, users, critics as a social networking platform for music lovers.</li>
            <li>
              Designed the application's front end using Reactjs and Redux. Mashed the local DB with the spotify's API to provide an integrated experience for users.</li>
            <li>
              Developed the backend using JAVA, JPA as a Spring Boot Application and used MySQL as the DBMS.</li>
            <li>
              Facilitated the communication between client and server using AJAX requests following the REST architecture.</li>

          </ul>

        </div>);
      case "Jobs Portal":
        return (<div>
          <ul>
            <li>Acted as a project lead in the team of 4 to design and develop a rich web application.</li>
            <li>
              Developed the business logic of the web application in Elixir.</li>
            <li>
              Developed the application's UI using React.js, vanilla javascript, jQuery, Bootstrap framework, Material UI framework and handled the state management using Redux.</li>
            <li>
              Used postgreSQL as a database management system.</li>
            <li>
              Facilitated the communication between client and server using web sockets through phoenix channels.</li>
            <li>
              Used REST APIs such as github jobs, Authentic jobs, etc. to consolidate job postings from various sources into a single web application where users can apply, track and bookmark jobs listings.</li>
            <li>
              Implemented Resume Parsing feature, where the user resume is parsed and relevant skills are extracted based on which the job postings are rated for compatibility with the user.</li>
            <li>
              Integrated Github OAuth to allow users to login via their github accounts.</li>
          </ul>
        </div>);

      case "StormTrader":
        return <div>
          <ul>
            <li>
              Developed the game logic in Elixir with phoenix framework.
            </li>
            <li>
              Application's UI was developed using React.js, javascript, jQuery, Bootstrap framework.
            </li>
            <li>
              The game allows two users to play against each other in a timed session of buying and selling stocks listed on the dashboard. The winner is decided based on the wallet amount left at the end of specified time.
            </li>
            <li>
              Unlimited users can spectate the match and watch realtime buying and selling of stocks.Additionally can help players by recommending buy options using chat feature.
            </li>
            <li>
              Facilitated the communication between client and server using web sockets through phoenix channels.
            </li>
            <li>
              Managed the state using Elixir's GenServers which allows large amount of concurrent users without overloading the server.
            </li>
          </ul>
        </div>;

      case "TaskTracker":
        return <div>
          <ul>
            <li>Developed a web application to track Tasks, Similar to GitHub's issue feature.</li>
            <li>Tasks can be assigned to any user and any user can assign a task to you.</li>
            <li>Users can track their tasks, mark their tasks complete and enter how much time they have dedicated on a particular task.</li>
          </ul>
        </div>;

      case "MemoryGame":
        return <div>
          <ul>
            <li>
              The Game has auto save functionality which stores and retains the game state on the server using GenServers written in Elixir Language.</li>
          </ul>
        </div>;

      case "ConnectFourAI":
        return <div>
          <ul>
            <li>
              Developed the connect4 game in python with multiplayer feature of human vs human and computer vs human.</li>
            <li>
              Developed an AI agent using Adversarial search techniques such as Minimax with alpha-beta pruning and additional improvements such as move ordering and state caching improving the compute time by 30%.</li>
            <li>
              Designed and Implemented a strong heuristic evaluation function for the algorithm which uses a weighted matrix to compute the next moves.
            </li>
            <li>
              Improved efficiency of the agent by state caching technique.</li>
          </ul>
        </div>;

      case "Oruta":
        return <div>
          <ul>
            <li>
              Acted as a team lead in a group of 4, to develop an efficient third party public auditing mechanism, which checks the integrity of shared data in a group of users over a cloud.</li>
            <li>
              Developed the application in Java and used Swing framework to design UI.</li>
            <li>
              Third party auditor reduces the overhead of performing data security in a cloud, by performing Integrity check of data without knowing the owners/ users of a particular data file, and also preserves the data content by random masking technique.</li>
            <li>
              Published a paper ‘ORUTA: Privacy Preserving Public Auditing for Shared Data in the Cloud’ in International Journal of Scientific and Engineering Research, 2017.
            </li>
          </ul>
        </div>;

      default:
        return <div></div>;
    }
  }
  return (<div className="description">{descp()}</div>);
}

export default connect((state) => state)(Description);
