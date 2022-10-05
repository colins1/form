
import Widget from './Widget';

test('create widget', () => {
  new Widget();
  const widgetWindow = document.querySelector('.widget-window');
  expect(widgetWindow).toBeTruthy();
});