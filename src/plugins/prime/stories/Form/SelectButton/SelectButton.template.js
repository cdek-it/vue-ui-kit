import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

export const Template = (args) => ({
  components: { SelectButton },
  setup() {
    const value = ref('1');
    const valueChecked = ref('2');

    const options = [
      { name: 'Option 1', value: '1' },
      { name: 'Option 2', value: '2' },
      { name: 'Option 3', value: '3' },
    ];

    const optionsWithIcons = [
      { name: 'Left', value: 'left', icon: 'ti ti-align-left' },
      { name: 'Center', value: 'center', icon: 'ti ti-align-center' },
      { name: 'Right', value: 'right', icon: 'ti ti-align-right' },
    ];

    const semiDisabledOptions = [
      { name: 'Option 1', value: '1', disabled: false },
      { name: 'Option 2', value: '2', disabled: true },
      { name: 'Option 3', value: '3', disabled: false },
    ];

    return {
      args,
      value,
      valueChecked,
      options,
      optionsWithIcons,
      semiDisabledOptions,
    };
  },
  template: `
    <div>
      <!-- Основная таблица с размерами и состояниями -->
      <div :style="{ display: 'grid', gridTemplateColumns: '140px repeat(4, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'start' }">
        <span></span>
        <span><code>default</code></span>
        <span><code>selected</code></span>
        <span><code>disabled</code></span>
        <span><code>semi-disabled</code></span>

        <!-- Extra Large -->
        <span :style="{ justifySelf: 'flex-start' }"><code>class="p-selectbutton-xlg"</code></span>
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="valueChecked" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="value" 
          :options="semiDisabledOptions" 
          optionLabel="name" 
          optionValue="value" 
          :optionDisabled="(option) => option.disabled"
          v-bind="args" 
        />

        <!-- Large -->
        <span :style="{ justifySelf: 'flex-start' }"><code>class="p-selectbutton-lg"</code></span>
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="valueChecked" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="value" 
          :options="semiDisabledOptions" 
          optionLabel="name" 
          optionValue="value" 
          :optionDisabled="(option) => option.disabled"
          v-bind="args" 
        />

        <!-- Base (Default) -->
        <span :style="{ justifySelf: 'flex-start' }"><code>Base</code></span>
        <SelectButton 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          v-model="valueChecked" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args" 
        />
        <SelectButton 
          v-model="value" 
          :options="semiDisabledOptions" 
          optionLabel="name" 
          optionValue="value" 
          :optionDisabled="(option) => option.disabled"
          v-bind="args" 
        />

        <!-- Small -->
        <span :style="{ justifySelf: 'flex-start' }"><code>class="p-selectbutton-sm"</code></span>
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="valueChecked" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="value" 
          :options="options" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args" 
        />
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="value" 
          :options="semiDisabledOptions" 
          optionLabel="name" 
          optionValue="value" 
          :optionDisabled="(option) => option.disabled"
          v-bind="args" 
        />
      </div>

      <br><br>

      <!-- С иконками -->
      <h3>С иконками</h3>
      <div :style="{ display: 'grid', gridTemplateColumns: '140px repeat(3, max-content)', gap: '20px', alignItems: 'center', justifyItems: 'start' }">
        <span></span>
        <span><code>default</code></span>
        <span><code>selected</code></span>
        <span><code>disabled</code></span>

        <span :style="{ justifySelf: 'flex-start' }"><code>class="p-selectbutton-xlg"</code></span>
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="valueChecked" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          class="p-selectbutton-xlg" 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>

        <span :style="{ justifySelf: 'flex-start' }"><code>class="p-selectbutton-lg"</code></span>
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="valueChecked" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          class="p-selectbutton-lg" 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>

        <span :style="{ justifySelf: 'flex-start' }"><code>Base</code></span>
        <SelectButton 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          v-model="valueChecked" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>

        <span :style="{ justifySelf: 'flex-start' }"><code>class="p-selectbutton-sm"</code></span>
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="valueChecked" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
        <SelectButton 
          class="p-selectbutton-sm" 
          v-model="value" 
          :options="optionsWithIcons" 
          optionLabel="name" 
          optionValue="value" 
          disabled 
          v-bind="args"
        >
          <template #option="slotProps">
            <i :class="slotProps.option.icon"></i>
            <span>{{ slotProps.option.name }}</span>
          </template>
        </SelectButton>
      </div>

      <br><br>

      <!-- Fluid вариант -->
      <h3>Fluid вариант</h3>
      <div :style="{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }">
        <div>
          <p><code>class="p-selectbutton-xlg fluid"</code></p>
          <SelectButton 
            class="p-selectbutton-xlg fluid" 
            v-model="value" 
            :options="options" 
            optionLabel="name" 
            optionValue="value" 
            v-bind="args" 
          />
        </div>

        <div>
          <p><code>class="p-selectbutton-lg fluid"</code></p>
          <SelectButton 
            class="p-selectbutton-lg fluid" 
            v-model="value" 
            :options="options" 
            optionLabel="name" 
            optionValue="value" 
            v-bind="args" 
          />
        </div>

        <div>
          <p><code>class="fluid"</code> (Base)</p>
          <SelectButton 
            class="fluid" 
            v-model="value" 
            :options="options" 
            optionLabel="name" 
            optionValue="value" 
            v-bind="args" 
          />
        </div>

        <div>
          <p><code>class="p-selectbutton-sm fluid"</code></p>
          <SelectButton 
            class="p-selectbutton-sm fluid" 
            v-model="value" 
            :options="options" 
            optionLabel="name" 
            optionValue="value" 
            v-bind="args" 
          />
        </div>
      </div>

      <br><br>

      <div>
        <p><b>Об опции fluid</b></p>
        <p>Для применения к компоненту, необходимо добавить класс <u><code>class="fluid"</code></u>.</p>
        <p>Опция совместима с опцией <b>disabled</b> и всеми размерами.</p>
      </div>
    </div>
  `,
});
