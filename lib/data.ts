const data = [
  {
    id: "1",
    title: "Waffles",
    category: "Dessert",
    image: "/images/waffles.jpg",
  },
  {
    id: "2",
    title: "Millionaires Shortbread",
    category: "Dessert",
    image: "/images/shortbread.jpg",
    description: "Also known as 'Caramel Slice' depending on where you're from",
    ingredients: [
      {
        title: "Shortbread",
        children: [
          "¼ Cup Brown Sugar",
          "1 Tsp Vanilla Extract",
          "1 Tsp Kosher Salt",
          "½ Cup Unsalted Butter Melted",
          "1 Cup All Purpose Flour",
          "1 Sprinkle Raw Sugar",
        ],
      },
      {
        title: "Caramel",
        children: [
          "¼ Cup Unsalted Butter",
          "200 mL Sweetened Condensed Milk",
          "¼ Cup Light Brown Sugar",
          "¼ Tsp Kosher Salt",
        ],
      },
      {
        title: "Chocolate",
        children: ["170 Grams Dark Chocolate Roughly chopped", "57 Grams Dark Chocolate Finely chopped"],
      },
    ],
    instructions: [
      "Whisk together until it's all well combined.",
      "Whisk together the flour with other ingredients. Dough should be nice and crumbly, but hold its shape when pressed together.",
      "Line a pan with two sheets of aluminum foil. Line one sheet along the width and the other along the length. Press the foil into the corners and rub down with butter. This way you can lift the final slice easily from the pan and separate it from the foil.",
      "With wet fingers, press the dough into the pan. Evenly spread the dough into the bottom of the pan, and flatten using a large spatula. 'Dock' the dough by poking all over with a fork. Place into a 177ºC oven for 17-22 minutes.",
      "Once baked, let cool for 2 hours on a wire rack",
      "Over medium heat, whisk together the ingredients. Once simmering, whisk regularly for about 15 to 20 minutes, or until it reaches 113ºC. It may slow down once reaching around 107ºC, just keep whisking until it reaches 113ºC.",
      "For perfect caramel consistency, it must get between 113ºC and 116ºC.",
      "Once the temperature is correct, pour the caramel onto the shortbread and use an offset spatula to push it into all the corners for an even spread. Gently tapping the tray onto your worktop a few times will help smooth out any bubbles.",
      "Allow to cool completely.",
      "For tempered chocolate, begin by melting the larger amount of chocolate in a double boiler. Stir the chocolate while it melts, but do not let it exceed a temperature of 49ºC.",
      "As it finishes melting, reduce the heat or remove it from heat entirely. Immediately add in the smaller amount of finely chopped chocolate and stir until smooth and tempered. The heat of the larger amount of chocolate should melt it comfortably.",
      "Once the chocolate cools to 28ºC, pour it onto the caramel. Again use an offset spatula to spread and push the chocolate into all corners evenly. Wiggle the pan and gently tap it onto the worktop a few times to smooth out the top.",
      "Cover and refrigerate until the chocolate is set. This timing will depend on the height of our chocolate layer.",
      "Using the foil edges, lift the slice from the pan. Then carefully peel away from the sides.",
      "Using a hot knife, cut into bars of desired length and serve.",
    ],
  },
  {
    id: "3",
    title: "Lemon Chicken",
    category: "Main",
    image: "/images/lemon-chicken.jpg",
  },
  {
    id: "7",
    title: "Chili Beef and Cheese Mini Tacos",
    category: "Main",
  },
  {
    id: "4",
    title: "Indian-style crispy fried corn",
    category: "Side",
    image: "/images/fried-corn.jpg",
  },
  {
    id: "5",
    title: "Southern-style cornbread",
    category: "Bread",
    image: "/images/cornbread.jpg",
  },
  {
    id: "6",
    title: "Weekend Museli",
    category: "Breakfast",
    image: "/images/muesli.jpg",
  },
  {
    id: "8",
    title: "1000 Calorie Burrito Bowls",
  },
];

export default data;
