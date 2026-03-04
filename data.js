// Project 005 - Family Data (14 Members)

const familyData = [
    {
        id:1,
        name: "Hardayal Soni",
        gender: "male",
        birthYear: "1960",
        bio: "A man on the pinnacle of society.",
        photo: "photos/dada.jpg",
        parentId: null,
        spouseId: 2
    },
    {
        id: 2,
        name: "Guddi Devi",
        gender: "female",
        birthYear: "1963",
        bio: "A very frugal woman. Lives by the motto\" Money is everything\"",
        photo: "photos/dadi.jpg",
        parentId: null,
        spouseId: 1
    },
    {
        id: 3,
        name: "Mahaveer Prasad Soni",
        gender: "male",
        birthYear: "1985",
        bio: "we'll add this later.",
        photo: "photos/papa.jpg",
        parentId: 1,
        spouseId: 4
    },
    {
        id: 4,
        name: "Sunita Soni",
        gender: "female",
        birthYear: "1988",
        bio: "Will be added in next patch",
        photo: "photos/mummy.jpg",
        parentId: null,
        spouseId: 3
    },
    {
        id:5,
        name: "Dayaram Soni",
        gender: "male",
        birthYear: "1989",
        bio: "",
        photo: "photos/chacha.jpg",
        parentId: 1,
        spouseId: 6
    },
    {
        id: 6,
        name: "Suman Soni",
        gender: "female",
        birthYear: "1990",
        bio: "",
        photo: "photos/chachi.jpg",
        parentId: null,
        spouseId: 5
    },
    {
        id: 7,
        name: "Mohit Soni",
        gender: "male",
        birthYear: "29 Oct, 2005",
        bio: "Technically I'm the Dev.",
        photo: "photos/mohit.jpg",
        parentId: 3,
        spouseId: null
    },
    {
        id: 8,
        name: "Pankaj Soni",
        gender: "male",
        birthYear: "19 Oct, 2006",
        bio: "",
        photo: "photos/pankaj.jpg",
        parentId: 5,
        spouseId: null
    },
    {
        id: 9,
        name: "Kamal Soni",
        gender: "male",
        birthYear: "03 Oct, 2007",
        bio: "",
        photo: "photos/kamal.jpg",
        parentId: 3,
        spouseId: null
    },
    {
        id:10,
        name: "Sameer(Kanha)",
        gender: "male",
        birthYear: "05 Dec, 2008",
        bio: "",
        photo: "photos/sameer.jpg",
        parentId: 5,
        spouseId: null
    },
    {
        id: 11,
        name: "Suman(Meera)",
        gender: "female",
        birthYear: "1981",
        bio: "",
        photo: "photos/bhua.jpg",
        parentId: 1,
        spouseId: 12
    },
    {
        id: 12,
        name: "Sundar Soni",
        gender: "male",
        birthYear: "1979",
        bio: "",
        photo: "photos/fufa.jpg",
        parentId: null,
        spouseId: 11
    },
    {
        id:13,
        name: "Vishal Soni",
        gender: "male",
        birthYear: "6 June, 2000",
        bio: "",
        photo: "photos/vishal.jpg",
        parentId: 12,
        spouseId: null
    },
    {
        id: 14,
        name: "Poonam Soni",
        gender: "female",
        birthYear: "16 Sept, 2002",
        bio: "Ghuttar",
        photo: "photos/poonam.jpg",
        parentId: 12,
        spouseId: null
    }
];
