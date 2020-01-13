import { ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Option, Component } from 'typedoc/dist/lib/utils';
import { Application } from 'typedoc/dist/lib/application';

@Component({ name: 'example' })
class Plugin extends ConverterComponent {
  @Option({
    name: 'message',
    help: 'outputs a message',
  })
  _message!: string;
}

module.exports = (host: Application) => {
  console.log('** plugin example **');

  const app = host.owner;
  app.converter.addComponent('example', new Plugin(app.converter));

  const declaration = app.options.getDeclaration('message');

  console.log('has declaration', !!declaration);
}
