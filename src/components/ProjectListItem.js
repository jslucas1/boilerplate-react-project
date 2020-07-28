import React from 'react';
import {Link} from 'react-router-dom';

const ProjectListItem = ({dispatch, id, projectName, projectEmail}) => (
        <Link className = "list-item" to= {`/editproject/${id}`}>
            <div>
                <h3 className="list-item__title">{projectName}</h3>
            </div>
            <h3 className="list-item__data">{projectEmail}</h3>
           
        </Link>
);

export default ProjectListItem;