//Loai SP
const listTab = [
  {
    id: '1',
    status: 'Tất cả'
  },
  {
    id: '2',
    status: 'Áo'
  },
  {
    id: '3',
    status: 'Quần'
  },
  {
    id: '4',
    status: 'Giày'
  },
  {
    id: '5',
    status: 'Dép'
  },
  {
    id: '6',
    status: 'Túi xách'
  },
  {
    id: '7',
    status: 'Balo'
  },
  {
    id: '8',
    status: 'Mắt kính'
  },
  {
    id: '9',
    status: 'Vòng tay'
  },
  {
    id: '10',
    status: 'Nhẫn'
  },
  {
    id: '11',
    status: 'Dây Chuyền'
  },
]

//San Pham
const sectionListData = [
  {
    id: 1,
    title: 'Áo khoác',
    key: 'Áo',
    status: 'Áo',
    data: [
      {
        list: [
          {
            name: "Áo Nike",
            image: require("../../../assets/images/Ao/AoKhoac/aokhoac1.png"),
          },
          {
            name: "Áo Adidas",
            image: require("../../../assets/images/Ao/AoKhoac/aokhoac2.png"),

          },
          {
            name: "Áo trơn",
            image: require("../../../assets/images/Ao/AoKhoac/aokhoac3.png"),

          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Áo thun',
    key: 'Áo thun',
    status: 'Áo',
    data: [
      {
        list: [
          {
            name: "Áo Marvel",
            image: require("../../../assets/images/Ao/AoThun/aothun1.png"),
          },
          {
            name: "Áo trơn",
            image: require("../../../assets/images/Ao/AoThun/aothun2.png"),

          },
          {
            name: "Áo có cổ",
            image: require("../../../assets/images/Ao/AoThun/aothun3.png"),

          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: 'Varsity Jacket',
    key: 'Varsity Jacket',
    status: 'Áo',
    data: [
      {
        list: [
          {
            name: "Varsity USA",
            image: require("../../../assets/images/Ao/VarsityJacket/varsity1.png"),
          },
          {
            name: "Varsity Japan",
            image: require("../../../assets/images/Ao/VarsityJacket/varsity2.png"),

          },
          {
            name: "Varsity Harvard",
            image: require("../../../assets/images/Ao/VarsityJacket/varsity3.png"),

          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: 'Quần',
    key: 'Quần',
    status: 'Quần',
    data: [
      {
        list: [
          {
            name: "Jean 1",
            image: require("../../../assets/images/Quan/Jean/quan1.png"),
          },
          {
            name: "Jean 2",
            image: require("../../../assets/images/Quan/Jean/quan2.png"),

          },
          {
            name: "Jean 3",
            image: require("../../../assets/images/Quan/Jean/quan3.png"),

          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: 'Giày',
    key: 'Giày',
    status: 'Giày',
    data: [
      {
        list: [
          {
            name: "Giày Adidas",
            image: require("../../../assets/images/Giay/Adidas/giay1.png"),
          },
          {
            name: "Giày Nike",
            image: require("../../../assets/images/Giay/Nike/giay2.png"),

          },
          {
            name: "Giày Nike",
            image: require("../../../assets/images/Giay/Nike/giay3.png"),

          },
          {
            name: "Giày Conserve",
            image: require("../../../assets/images/Giay/Conserve/giay4.png"),

          },
        ],
      },
    ],
  },
]

// export { data, listTab };

export { sectionListData, listTab };