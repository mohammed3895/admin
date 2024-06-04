export const BLOG_POSTS = [
  {
    id: "uu99-iiyy-ng8g-gjh9-fohf",
    description:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.",
    image:
      "https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=1714&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: new Date().getTime(),
    owner: {
      name: "sam smith",
      email: "sam@smith.com",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    likes: 20,
    comments: [
      {
        id: 1,
        message: "Nice work bro",
        owner: {
          name: "sara james",
          email: "sara@james.com",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        },
      },
    ],
  },
];
