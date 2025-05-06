import { Meta, StoryFn } from '@storybook/angular';
import { LocationPopupComponent } from '../../app/components/location-popup/location-popup.component';

export default {
  title: 'Components/Modal/Location Pop Up',
  component: LocationPopupComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: StoryFn<LocationPopupComponent> = (args) => ({
  props: args,
  template: `
    <div style="background: #f5f5f5; padding: 2rem; height: 100vh;">
      <app-location-popup></app-location-popup>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const WithCustomOptions = Template.bind({});
WithCustomOptions.args = {
  departments: ['Amazonas', 'Boyacá', 'Córdoba'],
  cities: ['Leticia', 'Tunja', 'Montería']
};