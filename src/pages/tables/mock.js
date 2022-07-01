import React, {useState} from 'react'
import axios from 'axios'

import ellieSmithImg from "../../assets/tables/ellieSmithImg.png";
import floydMilesImg from "../../assets/tables/floydMilesImg.png";
import rosaFloresImg from "../../assets/tables/rosaFloresImg.png";
import janeCooperImg from "../../assets/tables/janeCooper.png";
import bagIcon from "../../assets/tables/bagIcon.svg";
import folderIcon from "../../assets/tables/folderIcon.svg";
import joystickIcon from "../../assets/tables/joystickIcon.svg";
import basketIcon from "../../assets/tables/basketIcon.svg";



const mock = {
  
  firstTable: [
    {
      id: "checkbox111",
      img: janeCooperImg,
      name: "Jane Cooper",
      company: "Barrone LLC.",
      city: "Kalamazoo, MI",
      state: "Michigan",
    },
    {
      id: "checkbox112",
      img: ellieSmithImg,
      name: "Ellie Smith",
      company: "Abstergo Ltd.",
      city: "Bainbridge",
      state: "Massachusetts",
    },
    {
      id: "checkbox113",
      img: rosaFloresImg,
      name: "Rosa Flores",
      company: "Binford Ltd.",
      city: "Leucadia, CA",
      state: "Minnesota",
    },
    {
      id: "checkbox114",
      img: floydMilesImg,
      name: "Floyd Miles",
      company: "Biffco.",
      city: "Idaho city, ID",
      state: "North Dakota",
    },
    {
      id: "checkbox121",
      img: floydMilesImg,
      name: "Jake Jones",
      company: "Example LLC.",
      city: "Yonkers, NY",
      state: "New York",
    },
    {
      id: "checkbox122",
      img: rosaFloresImg,
      name: "Selia Hani",
      company: "Example LLC.",
      city: "Dallas, TX",
      state: "Texas",
    },
    {
      id: "checkbox123",
      img: ellieSmithImg,
      name: "Rosa Flores",
      company: "Example LLC.",
      city: "Hartford, CT",
      state: "Connecticut",
    },
    {
      id: "checkbox124",
      img: janeCooperImg,
      name: "Mary Elias",
      company: "Example LLC.",
      city: "Idaho city, ID",
      state: "North Dakota",
    },
    {
      id: "checkbox131",
      img: ellieSmithImg,
      name: "Julie Fischer",
      company: "Example LLC.",
      city: "Kalamazoo, MI",
      state: "Michigan",
    },
    {
      id: "checkbox132",
      img: janeCooperImg,
      name: "Ellie Smith",
      company: "Example LLC.",
      city: "Bainbridge",
      state: "Massachusetts",
    }
  ],
  secondTable: [
    {
      id: "checkbox211",
      name: "Jane Cooper",
      email: "@example.com",
      product: "series",
      price: "$5.22",
      date: "5/27/21",
      city: "Pembroke",
      color: "secondary-cyan",
      status: "Sent",
    },
    {
      id: "checkbox212",
      name: "Ellie Smith",
      email: "@example.com",
      product: "chair pad",
      price: "$53.99",
      date: "3/19/21",
      city: "Austin",
      color: "secondary-cyan",
      status: "Sent",
    },
    {
      id: "checkbox213",
      name: "Rosa Flores",
      email: "@example.com",
      product: "dishes",
      price: "$12.24",
      date: "4/01/21",
      city: "Naperville",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox214",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox221",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-cyan",
      status: "Sent",
    },
    {
      id: "checkbox222",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox223",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-yellow",
      status: "Pending",
    },
    {
      id: "checkbox224",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-cyan",
      status: "Sent",
    },
    {
      id: "checkbox231",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-red",
      status: "Declined",
    },
    {
      id: "checkbox232",
      name: "Floyd Miles",
      email: "@example.com",
      product: "towels",
      price: "$8.99",
      date: "4/27/21",
      city: "Fairfield",
      color: "secondary-cyan",
      status: "Sent",
    }
  ],
  tasksWidget: [
    {
      id: 1,
      description: "Create An Image",
      time: "9 AM",
      completed: false,
    },
    {
      id: 2,
      description: "Team Design Miting",
      time: "11 AM",
      completed: false,
    },
    {
      id: 3,
      description: "Create An Image",
      time: "2.30 PM",
      completed: false,
    },
    {
      id: 4,
      description: "Interview With John Hamm",
      time: "4 PM",
      completed: false,
    },
  ]
}

export default mock;
