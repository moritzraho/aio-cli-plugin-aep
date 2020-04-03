/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const BaseCommand = require('../about')
const {flags} = require('@oclif/command')
const {cli} = require('cli-ux')

class CreateMappingSetsFromPayloadCommand extends BaseCommand {
  async run() {
    const {flags} = this.parse(CreateMappingSetsFromPayloadCommand)
    let result

    try {
      result = await this.createMappingSetWithPayload(flags.file)
      this.printObject(result)
    } catch (error) {
      this.error(error.message)
    }
    return result
  }

  async createMappingSetWithPayload(file) {
    return this.getAdobeAep().createMappingSetWithPayload(file)
  }
}

CreateMappingSetsFromPayloadCommand.description = 'Create a mapping set with a payload. '
CreateMappingSetsFromPayloadCommand.hidden = false
CreateMappingSetsFromPayloadCommand.flags = {
  ...BaseCommand.flags,
  json: flags.boolean({char: 'j', hidden: false, description: 'value as json'}),
  yaml: flags.boolean({char: 'y', hidden: false, description: 'value as yaml'}),
  file: flags.string({
    char: 'f',
    description: 'The json file path with mappingset data'
  })
}

CreateMappingSetsFromPayloadCommand.aliases = [
  'aep:schemas:create-with-payload']

CreateMappingSetsFromPayloadCommand.examples = [
  '$ aio aep:schemas:create-with-payload -f=$filepath',

]
module.exports = CreateMappingSetsFromPayloadCommand
