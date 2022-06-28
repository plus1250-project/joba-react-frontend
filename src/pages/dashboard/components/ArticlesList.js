import React, {useState} from 'react'
import axios from 'axios';

import Widget from "../../../components/Widget/Widget.js";
import s from "../../tables/Tables.module.scss"
import mock from "../../tables/mock.js"
import TaskContainer from "../../tables/components/TaskContainer/TaskContainer";



const ArticlesList = (props) => {

    const [tasks, setTasks] = useState(mock.tasksWidget);
    const [aList, setAList] = useState([]);

    const articles = [];
    for (const key in props.articlesList) {
        // console.log('key'+ key.articleTitle);
        articles.push({
            id: key,
            articleTitle: props.articlesList[key].articleTitle,
            articleUrl: props.articlesList[key].articleUrl,
            industryName: props.articlesList[key].industryName,
            pubCompany: props.articlesList[key].pubCompany,
            pubDate: props.articlesList[key].pubDate,
        })
    }
    setAList(articles);

    const toggleTask = (id) => {
        setTasks(
          tasks.map( task => {
            if (task.id === id) {
              task.completed = !task.completed;
            }
            return task;
          })
        )
      }

  return (
    
                  <Widget>
                    <div className={s.tableTitle}>
                      <div className="headline-2">Tasks</div>
                    </div>
                    <div className={s.widgetContentBlock}>
                      <TaskContainer tasks={tasks} articles={aList} toggleTask={toggleTask} />
                    </div>
                  </Widget>
               
  )
}

export default ArticlesList