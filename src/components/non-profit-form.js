import React from "react";

export default function NonProfitForm(){

    return(
        <div className="non-profit-form">
            <h3>Project Requirements</h3>
            <p>Enter the requirements for the project you are creating for your non-profit organization.</p>
            <form>
                <label for="nonprofitName">Name</label>
                <input name="nonprofitName"/>
                <label for="projectTitle">Project Title</label>
                <input name="projectTitle"/>
                <label for="projectReqs"><h4>Project Requirements</h4></label>
                <textarea name="projectReqs"/>
            </form>
        </div>
    );
}