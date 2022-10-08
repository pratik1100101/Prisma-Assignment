import { Prisma, PrismaClient } from '@prisma/client'
import { ALL } from 'dns'
import { userInfo } from 'os'

const prisma = new PrismaClient()

async function main() {

// //Create 5 Accounts//  
// const accountAndUserInfo1 = await prisma.userInfo.create({
//     data:{
//         firstName: 'Simon',
//         lastName: 'S',
//         email: 'simons@gmail.com',
//         phone: '123',
//         account: {
//             create:{
//                 password: '1234',
//                 gmailAuth: 'yes'
//             }
//         }
//         }
//     })
// const accountAndUserInfo2 = await prisma.userInfo.create({
//     data:{
//         firstName: 'Lemon',
//         lastName: 'DJ',
//         email: 'lemondj@gmail.com',
//         phone: '124',
//         account: {
//             create:{
//                 password: '1234',
//                 gmailAuth: 'yes'
//             }
//         }
//         }
//     })
// const accountAndUserInfo3 = await prisma.userInfo.create({
//     data:{
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'johndoe@gmail.com',
//         phone: '321',
//         account: {
//             create:{
//                 password: '1234',
//                 gmailAuth: 'yes'
//             }
//         }
//         }
//     })
// const accountAndUserInfo4 = await prisma.userInfo.create({
//     data:{
//         firstName: 'Jane',
//         lastName: 'Doe',
//         email: 'janedoe@gmail.com',
//         phone: '231',
//         account: {
//             create:{
//                 password: '1234',
//                 gmailAuth: 'yes'
//             }
//         }
//         }
//     })
// const accountAndUserInfo5 = await prisma.userInfo.create({
//     data:{
//         firstName: 'Yorm',
//         lastName: 'TheGiant',
//         email: 'yormthegiant@gmail.com',
//         phone: '999',
//         account: {
//             create:{
//                 password: '1234',
//                 gmailAuth: 'yes'
//             }
//         } 
//         }
//     })
// //End 5 accounts//

// //Artist//
// const updateUser1 = await prisma.userInfo.update({
//     where: {
//       email: 'yormthegiant@gmail.com',
//     },
//     data: {
//       artist: {
//         create: {
//             monthlyListeners: '20000',
//             }
//         }
//       }
// })
// const updateUser2 = await prisma.userInfo.update({
// where: {
//     email: 'lemondj@gmail.com',
// },
// data: {
//     artist: {
//     create: {
//         monthlyListeners: '200'
//     }
//     }
// },
// })
// const updateUser3 = await prisma.userInfo.update({
//     where: {
//         email: 'simons@gmail.com',
//     },
//     data: {
//         artist: {
//         create: {
//             monthlyListeners: '1234'
//         }
//         }
//     },
//     })
// //End Artist//

// //Podcast//
// const createStudio1 = await prisma.studio.create({
//     data:{
//         name: 'B-Series',
//         email: 'bseries@gmail.com',
//         phone: '456',
//         podcasts: {
//           create: [
//             {
//               name: 'SimonSays',
//               episodes: '4',
//               artistInfo: {
//                 connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//               },
//               podcastEpisodes: {
//                 create: [
//                   {
//                     episodeName: 'Simon Says Create',
//                     credits: 'Simon S, The Creator',
//                     releaseDate: new Date('2020-10-23')
//                 },
//                 {
//                     episodeName: 'Simon Says Read',
//                     credits: 'Simon S, The Reader',
//                     releaseDate: new Date('2021-05-9')
//                 },
//                 {
//                     episodeName: 'Simon Says Update',
//                     credits: 'Simon S, The Updator',
//                     releaseDate: new Date('2020-10-23')
//                 },
//                 {
//                     episodeName: 'Simon Says Delete',
//                     credits: 'Simon S, The Deletor',
//                     releaseDate: new Date('2020-10-23')
//                 }
//                 ]
//               }
//             },
//             {
//               name: 'SimonCast',
//               episodes: '2',
//               artistInfo: {
//                 connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//               },
//               podcastEpisodes: {
//                 create: [
//                   {
//                     episodeName: 'SimonCast01',
//                     credits: 'Simon S, Yorm The Giant',
//                     releaseDate: new Date('2022-01-15')
//                 },
//                 {
//                     episodeName: 'SimonCast02',
//                     credits: 'Simon S, DJ Lemon',
//                     releaseDate: new Date('2022-02-15')
//                 },
//                 ]
//                 }
                
//               },
//               {
//                 name: 'Lemonade',
//                 episodes: '2',
//                 artistInfo: {
//                   connect: {id: '8aae3666-ffb9-4e07-9224-3b19e4415bcf'}
//                 },
//                 podcastEpisodes: {
//                   create: [
//                     {
//                       episodeName: 'Lemonade01',
//                       credits: 'Lemon DJ, Yorm The Giant',
//                       releaseDate: new Date('2022-04-10')
//                   },
//                   {
//                       episodeName: 'Lemonade02',
//                       credits: 'DJ Lemon, Simon S',
//                       releaseDate: new Date('2022-05-10')
//                   },
//                   ]
//                   }
//                 },
//                 {
//                   name: 'LemonChaska',
//                   episodes: '4',
//                   artistInfo: {
//                     connect: {id: '8aae3666-ffb9-4e07-9224-3b19e4415bcf'}
//                   },
//                   podcastEpisodes: {
//                     create: [
//                       {
//                         episodeName: 'Music Industry: 01',
//                         credits: 'Lemon DJ, Yorm The Giant, Simon S',
//                         releaseDate: new Date('2022-06-01')
//                     },
//                     {
//                       episodeName: 'Music Industry: 02',
//                       credits: 'Lemon DJ, Yorm The Giant, Simon S',
//                         releaseDate: new Date('2022-06-08')
//                     },
//                     {
//                       episodeName: 'Music Industry: 03',
//                       credits: 'Lemon DJ, Yorm The Giant, Simon S',
//                         releaseDate: new Date('2022-06-15')
//                     },
//                     {
//                       episodeName: 'Music Industry: 04',
//                       credits: 'Lemon DJ, Yorm The Giant, Simon S',
//                         releaseDate: new Date('2022-06-22')
//                     },
//                     ]
//                     }
//                   },
//             ] 
//             }, 
//         }
// })
// const createStudio2 = await prisma.studio.create({
//   data:{
//       name: 'Beth Row Records',
//       email: 'brr@gmail.com',
//       phone: '291'
//   }
// })
// const createStudio3 = await prisma.studio.create({
//   data:{
//       name: 'Lobster Studios',
//       email: 'lobsterstudios@gmail.com',
//       phone: '901',
//       podcasts: {
//         create: [
//           {
//             name: 'YORMH',
//             episodes: '3',
//             artistInfo: {
//               connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//             },
//             podcastEpisodes: {
//               create: [
//                 {
//                   episodeName: 'YORMH - a',
//                   credits: 'Yorm The Giant, Paul Traeumer',
//                   releaseDate: new Date('2022-08-25')
//                 },
//                 {
//                   episodeName: 'YORMH - b',
//                   credits: 'Yorm The Giant, AVEM',
//                   releaseDate: new Date('2022-09-01')
//                 },
//                 {
//                   episodeName: 'YORMH - c',
//                   credits: 'Yorm The Giant, T-Pulse',
//                   releaseDate: new Date('2022-09-08')
//                 },
//               ]
//             }
//           },
//           {
//             name: 'YORmie',
//             episodes: '3',
//             artistInfo: {
//               connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//             },
//             podcastEpisodes: {
//               create: [
//                 {
//                   episodeName: 'YORmie 01',
//                   credits: 'Yorm The Giant, Anetha',
//                   releaseDate: new Date('2022-08-29')
//                 },
//                 {
//                   episodeName: 'YORmie 02',
//                   credits: 'Yorm The Giant, Stella Bossi',
//                   releaseDate: new Date('2022-09-05')
//                 },
//                 {
//                   episodeName: 'YORmie 03',
//                   credits: 'Yorm The Giant, Crepite',
//                   releaseDate: new Date('2022-09-12')
//                 },
//               ]
//             }
//           },
//        ]}
//     }
// })
// //End Podcast//

// //Audibook//
// const createAudiobook1 = await prisma.audiobook.create ({
//   data: {
//     name: 'My Life My Rules',
//     credits: 'Yorm The Giant',
//     releaseDate: new Date ('2020-09-25'),
//     artistInfo: {
//       connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//     },
//     studioIdInfo: {
//       connect: {id: '09b73e24-337f-4316-918e-e9ae82ddb8c0'}
//     }
//   }
// })
// const createAudiobook2 = await prisma.audiobook.create ({
//   data: {
//     name: 'Panic Now And Avoid The Rush',
//     credits: 'Simon S',
//     releaseDate: new Date ('2018-09-25'),
//     artistInfo: {
//       connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//     },
//     studioIdInfo: {
//       connect: {id: 'a1fb3aef-0d84-42b9-aa4a-6007990935cb'}
//     }
//   }
// })
// //End Audiobook//

// //Create Album and Singles//
// const createAlbum1 = await prisma.album.create({
//   data:{
//     name: 'Lords of Cinder',
//     numberOfSingles: 4,
//     releaseDate: new Date ('2019-12-31'),
//     credits: 'Yorm The Giant',
//     artistIdInfo:{
//       connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//     },
//     studioIdInfo: {
//       connect: {id: '09b73e24-337f-4316-918e-e9ae82ddb8c0'}
//     },
//     singles: {
//       create: [
//         {
//           singleName: 'Ludreth, The Exile',
//           artistNameInfo: {
//             connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//           },
//           releaseDate: new Date ('2019-12-31')
//         },
//         {
//           singleName: 'Abyss Watchers',
//           artistNameInfo: {
//             connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//           },
//           releaseDate: new Date ('2019-12-31')
//         },
//         {
//           singleName: 'Aldrich, Devourer of Gods',
//           artistNameInfo: {
//             connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//           },
//           releaseDate: new Date ('2019-12-31')
//         },
//         {
//           singleName: 'Lothric, Younger Prince',
//           artistNameInfo: {
//             connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//           },
//           releaseDate: new Date ('2019-12-31')
//         },
//       ]
//     }
//   }
// })
// const createAlbum2 = await prisma.album.create({
//   data:{
//     name: 'Lithium',
//     numberOfSingles: 3,
//     releaseDate: new Date ('2018-01-14'),
//     credits: 'Simon S',
//     artistIdInfo:{
//       connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//     },
//     studioIdInfo: {
//       connect: {id: 'a1fb3aef-0d84-42b9-aa4a-6007990935cb'}
//     },
//     singles: {
//       create: [
//         {
//           singleName: 'Reuse Refuse',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2018-01-14')
//         },
//         {
//           singleName: 'T for Tesla',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2018-01-14')
//         },
//         {
//           singleName: 'My Good Life on Mars',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2018-01-14')
//         }
//       ]
//     }
//   }
// })
// const createAlbum3 = await prisma.album.create({
//   data:{
//     name: 'Voltage Bleed',
//     numberOfSingles: 5,
//     releaseDate: new Date ('2022-03-18'),
//     credits: 'Lemon DJ',
//     artistIdInfo:{
//       connect: {id: '8aae3666-ffb9-4e07-9224-3b19e4415bcf'}
//     },
//     studioIdInfo: {
//       connect: {id: 'd2c03350-5efe-4e95-877e-9cdf1b94528a'}
//     },
//     singles: {
//       create: [
//         {
//           singleName: 'Amphetamine',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2022-03-18')
//         },
//         {
//           singleName: 'What\'s The Use?',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2022-03-18')
//         },
//         {
//           singleName: 'Nasa',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2022-03-18')
//         },
//         {
//           singleName: 'Wicked',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2022-03-18')
//         },
//         {
//           singleName: 'Voltage Bleed',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2022-03-18')
//         }
//       ]
//     }
//   }
// })
// const createSingle1 = await prisma.album.create({
//   data:{
//     name: 'Rising Storm - Remixes',
//     numberOfSingles: 1,
//     releaseDate: new Date ('2022-09-21'),
//     credits: 'Yorm The Giant, Jorje',
//     artistIdInfo:{
//       connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//     },
//     studioIdInfo: {
//       connect: {id: 'a1fb3aef-0d84-42b9-aa4a-6007990935cb'}
//     },
//     singles:{
//       create: {
//         singleName: 'Rising Storm - Yorm Remix',
//         releaseDate: new Date ('2022-09-21'),
//         artistNameInfo: {
//             connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//           },
//       }
//     }
//   }
// })
// const createSingl2 = await prisma.album.create({
//   data:{
//     name: 'Bollywood - Remixes',
//     numberOfSingles: 1,
//     releaseDate: new Date ('2021-06-30'),
//     credits: 'Lemon DJ, Arjit Singh',
//     artistIdInfo:{
//       connect: {id: '8aae3666-ffb9-4e07-9224-3b19e4415bcf'}
//     },
//     studioIdInfo: {
//       connect: {id: 'd2c03350-5efe-4e95-877e-9cdf1b94528a'}
//     },
//     singles: {
//       create:
//         {
//           singleName: 'Kesariya - DJ Lemon Remix',
//           artistNameInfo: {
//             connect: {id: '03419103-7b8b-4f3a-b3a2-70ce6549b2cd'}
//           },
//           releaseDate: new Date ('2021-06-30')
//         }
//       }
//     }
// })
// //End Album and Singles//

// //Playlist//
// const createPlaylist1 = await prisma.playlist.create({
//   data: {
//     numberOfSingles: 4,
//     createdByUserInfo: {
//       connect: {id: '7f9a579a-4395-4cfa-aac0-82af5830cae0'}
//     },
//     followers: {
//       connect: [{id: 'bc16402f-e7de-4029-9490-d99a3b94cabc'},{id: 'dc717ec6-0c02-491d-a8f8-05b4c4dd1440'}]
//     },
//     songs:{
//       connect: [{id: '12cb6ccb-02eb-4e9e-b808-b4b947810b12'},{id: '5fb2d7ce-b8c2-4086-a728-6f984b45a89d'},{id: 'f04c2617-a2e3-49f9-b535-e9d43e1fd519'},{id: '6e2420ce-4c68-4bd1-8a29-1ff5776df99e'}]
//     }
//   }
// })
// const createPlaylist2 = await prisma.playlist.create ({
//   data: {
//     numberOfSingles: 6,
//     createdByUserInfo: {
//       connect: {id: 'bc16402f-e7de-4029-9490-d99a3b94cabc'}
//     },
//     followers:{
//       connect: [{id: 'ecb8d648-e4bf-465b-95f9-dfafd2504b9b'},{id: 'f0742bbf-c102-47e0-9feb-58388dba8587'},{id: '7f9a579a-4395-4cfa-aac0-82af5830cae0'}]
//     },
//     songs:{
//       connect: [{id: '29dae1f2-9642-48d0-86ab-39e4e99ac962'},{id: '34c78066-2bc9-4e3b-965f-617c777b2df7'},{id: '68eab976-4a8e-43f5-8c14-f9d64e8cdc55'},{id: '12cb6ccb-02eb-4e9e-b808-b4b947810b12'},{id: 'e34c1b41-00e8-49a1-a712-64c3324b0ad6'},{id: 'dd2d6abc-8bc9-4967-aa65-e5214dbc2fa0'}]
//     }
//   }
// })
// //End Playlist//

// //Single Without Album//
// const createSingle1 = await prisma.album.create({
//   data:{
//     name: 'Violet - Remixes',
//     numberOfSingles: 1,
//     releaseDate: new Date ('2022-09-21'),
//     credits: 'Yorm The Giant, Richie Hawthin',
//     artistIdInfo:{
//       connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//     },
//     studioIdInfo: {
//       connect: {id: 'a1fb3aef-0d84-42b9-aa4a-6007990935cb'}
//     },
//     singles:{
//       create: {
//         singleName: 'Rising Storm - Yorm Remix',
//         releaseDate: new Date ('2022-09-21'),
//         artistNameInfo: {
//             connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//           },
//       }
//     }
//   }
// })
// const createSingleWithoutAlbum2 = await prisma.single.create({
//   data: {
//     singleName: 'Violet - Yorm Remix',
//     releaseDate: new Date ('2022-08-09'),
//     artistNameInfo: {
//       connect: {id: 'f74611fe-e7cd-4228-b03a-cf101074e3d5'}
//     }
//   }
// })
// //Single Without Album//

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })