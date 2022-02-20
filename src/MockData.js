const MockData = [
  {
    userId: 1,
    id: 1,
    title: "Click on checkbox to remove",
    completed: false,
    subitems: [
      {
        id: 1,
        name: "Child 1",
        completed: false,
      },
      {
        id: 2,
        name: "Child 2",
        completed: false,
      },
    ],
  },
  {
    userId: 2,
    id: 2,
    title: "Give dog a bath",
    completed: false,
    subitems: []
  },
  {
    userId: 3,
    id: 3,
    title: "Phone",
    completed: false,
    subitems: [
      {
        id: 1,
        name: "Android 1",
        completed: false,
      },
      {
        id: 2,
        name: "Android 15",
        completed: false,
      },
    ],
  },
];

export default MockData
