//import axios from "axios";
//import Table from "rc-table";
//import React from "react";
//import { useState, useEffect } from "react";
//const Surveydata = () => {
//const [sdata, setData] = useState(null);
////useEffect(() => {
////axios
////.get("http://localhost:3001/surveydata")
////.then((response) => {
////setData(response.data);
////console.log(sdata);
////})
////.catch((error) => {
////console.log(error);
////});
////}, []);
////useEffect(() => {
////fetchsurveydata();
////setData(data);
////}, []);
////const fetchsurveydata = () => {
////axios
////.get("http://localhost:3001/surveydata")
////.then((response) => setData(response.data));
////};
////useEffect(() => {
////fetchsurveydata();
////}, []);
////React.useEffect(() => {
////axios.get("http://localhost:3001/surveydata").then((response) => {
////setData(response);
////});
////}, []);

//const surdata = [
//{
//Date: "25/1/2023",
//Number_of_responses: 13849,
//status: "Accepting responses",
//Average_of_review: 4.75,
//},
//{
//Date: "18/1/2023",
//Number_of_responses: 19921,
//status: "Completed",
//Average_of_review: 3.64,
//},
//{
//Date: "21/1/2023",
//Number_of_responses: 16004,
//status: "Accepting responses",
//Average_of_review: 4.11,
//},
//{
//Date: "23/1/2023",
//Number_of_responses: 29100,
//status: "Accepting responses",
//Average_of_review: 4.77,
//},
//{
//Date: "28/1/2023",
//Number_of_responses: 90111,
//status: "Completed",
//Average_of_review: 3.82,
//},
//{
//Date: "17/1/2023",
//Number_of_responses: 11000,
//status: "Completed",
//Average_of_review: 3.64,
//},
//{
//Date: "14/1/2023",
//Number_of_responses: 25000,
//status: "Accepting responses",
//Average_of_review: 3.33,
//},
//{
//Date: "19/1/2023",
//Number_of_responses: 23000,
//status: "Accepting responses",
//Average_of_review: 4.85,
//},
//{
//Date: "08/1/2023",
//Number_of_responses: 25000,
//status: "Completed",
//Average_of_review: 4.62,
//},
//{
//Date: "27/1/2023",
//Number_of_responses: 29034,
//status: "Completed",
//Average_of_review: 4.91,
//},
//];
//return (
//<>
//
//</>
//);
//};
//export default Surveydata;

import axios from "axios";
import Table from "rc-table";
import React, { useEffect, useState } from "react";

const Surveydata = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const columns = [
    {
      title: "S.no:",
      dataIndex: "id",
      key: "id",
      width: 200,
      fixed: true,
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "id",
      width: 200,
      fixed: true,
    },
    {
      title: "Number of responses",
      dataIndex: "Number_of_responses",
      key: "id",
      width: 200,
      fixed: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "id",
      width: 200,
      fixed: true,
    },
    {
      title: "Average of review",
      dataIndex: "Average_of_review",
      key: "id",
      width: 200,
      fixed: true,
    },
  ];
  const fetchData = () => {
    axios
      .get("http://localhost:3001/surveydata")
      .then((res) => {
        const dat = res.data;
        console.log(dat);
        setUsers(dat);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Table columns={columns} data={users} rowKey="id" tableLayout="auto" />
    </div>
  );
};

export default Surveydata;
//{users && users.length > 0 &&
//users.map((userObj, index) => <li key={index}>{userObj.Date}</li>)}
