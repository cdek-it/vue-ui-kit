import { MegaMenu } from 'primevue';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { MegaMenu },
  setup() {
    // Для MegaMenu нужна структура двумерного массива
    const items = ref([
      {
        label: 'Furniture',
        items: [
          [
            {
              label: 'Living Room',
              items: [
                { label: 'Accessories' },
                { label: 'Armchair' },
                { label: 'Coffee Table' },
                { label: 'Couch' },
                { label: 'TV Stand' },
              ],
            },
          ],
          [
            {
              label: 'Kitchen',
              items: [
                { label: 'Bar stool' },
                { label: 'Chair' },
                { label: 'Table' },
              ],
            },
          ],
          [
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }],
            },
          ],
          [
            {
              label: 'Bedroom',
              items: [
                { label: 'Bed' },
                { label: 'Chaise lounge' },
                { label: 'Cupboard' },
                { label: 'Dresser' },
                { label: 'Wardrobe' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Electronics',
        items: [
          [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
              ],
            },
          ],
          [
            {
              label: 'Home Theater',
              items: [
                { label: 'Projector' },
                { label: 'Speakers' },
                { label: 'TVs' },
              ],
            },
          ],
          [
            {
              label: 'Gaming',
              items: [
                { label: 'Accessories' },
                { label: 'Console' },
                { label: 'PC' },
                { label: 'Video Games' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Sports',
        items: [
          [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },
          ],
          [
            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },
          ],
          [
            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },
          ],
        ],
      },
    ]);

    return { args, items };
  },
  template: `
    <div>
      <MegaMenu :model="items"/>
    </div>
`,
});

export const Vertical = (args) => ({
  components: { MegaMenu },
  setup() {
    const items = ref([
      {
        label: 'Furniture',
        items: [
          [
            {
              label: 'Living Room',
              items: [
                { label: 'Accessories' },
                { label: 'Armchair' },
                { label: 'Coffee Table' },
                { label: 'Couch' },
                { label: 'TV Stand' },
              ],
            },
          ],
          [
            {
              label: 'Kitchen',
              items: [
                { label: 'Bar stool' },
                { label: 'Chair' },
                { label: 'Table' },
              ],
            },
          ],
          [
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }],
            },
          ],
          [
            {
              label: 'Bedroom',
              items: [
                { label: 'Bed' },
                { label: 'Chaise lounge' },
                { label: 'Cupboard' },
                { label: 'Dresser' },
                { label: 'Wardrobe' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Electronics',
        items: [
          [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
              ],
            },
          ],
          [
            {
              label: 'Home Theater',
              items: [
                { label: 'Projector' },
                { label: 'Speakers' },
                { label: 'TVs' },
              ],
            },
          ],
          [
            {
              label: 'Gaming',
              items: [
                { label: 'Accessories' },
                { label: 'Console' },
                { label: 'PC' },
                { label: 'Video Games' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Sports',
        items: [
          [
            {
              label: 'Football',
              items: [
                { label: 'Kits' },
                { label: 'Shoes' },
                { label: 'Shorts' },
                { label: 'Training' },
              ],
            },
          ],
          [
            {
              label: 'Running',
              items: [
                { label: 'Accessories' },
                { label: 'Shoes' },
                { label: 'T-Shirts' },
                { label: 'Shorts' },
              ],
            },
          ],
          [
            {
              label: 'Swimming',
              items: [
                { label: 'Kickboard' },
                { label: 'Nose Clip' },
                { label: 'Swimsuits' },
                { label: 'Paddles' },
              ],
            },
          ],
        ],
      },
    ]);

    return { args, items };
  },
  template: `
    <div>
      <MegaMenu :model="items" orientation="vertical"/>
    </div>
`,
});
