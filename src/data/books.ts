import { BookState } from "../features/books/booksSlice";

export const books: BookState[] = [
    { id: 1, title: "Unlocking Android", description: "A Developer's Guide for the Android operating system and development tools.", genre: "Mobile", author:"W. Frank Ableson", yearPublished: "2009", borrowAvailability: true, lastBorrower: "" },
    { id: 2, title: "Android in Action, Second Edition", description: "A comprehensive tutorial for Android developers", genre: "Java", author: "W. Frank Ableson", yearPublished: "2011", borrowAvailability: true, lastBorrower: "" },
    { id: 3, title: "Zend Framework in Action", description: "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services.", genre: "Web Development", author:"Rob Allen", yearPublished: "2010", borrowAvailability: true, lastBorrower: "" },
    { id: 4, title: "Flex on Java", description: "A beautifully written book that is a must have for every Java Developer.", genre: "Internet", author: "Bernerd Allmon", yearPublished: "2011", borrowAvailability: true, lastBorrower: "" },
    { id: 5, title: "Griffon in Action", description: "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development.", genre: "Java", author: "Andres Almiray", yearPublished: "2010", borrowAvailability: true, lastBorrower: "" },
    { id: 6, title: "OSGi in Depth", description: "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification", genre: "Java", author: "Alexandre de Castro Alves", yearPublished: "2015", borrowAvailability: true, lastBorrower: "" },
    { id: 7, title: "Flexible Rails", description: "Flexible Rails created a standard to which I hold other technical books.", genre: "Web Development", author: "Peter Armstrong", yearPublished: "2014", borrowAvailability: true, lastBorrower: "" },
    { id: 8, title: "Coffeehouse", description: "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.", genre: "Miscellaneous", author: "Levi Asher", yearPublished: "2013", borrowAvailability: true, lastBorrower: "" },
    { id: 9, title: "Hello! Flex 4", description: "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex.", genre: "Internet", author: "Peter Armstrong", yearPublished: "2012", borrowAvailability: true, lastBorrower: "" },
    { id: 10, title: "Brownfield Application Development in .NET", description: "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts.", genre: "Microsoft", author: "Kyle Baley", yearPublished: "1997", borrowAvailability: true, lastBorrower: "" },
];