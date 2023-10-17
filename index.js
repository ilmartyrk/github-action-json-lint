'use strict';

/**
 * GitHub Action for validating JSON file
 * @type {exports|module.exports}
 *
 * @see https://developer.github.com/v3/activity/events/types/#deploymentstatusevent
 */

const core = require('@actions/core');
const { context } = require('@actions/github');
const fs = require('fs/promises');

core.debug(`GitHub Deployment Status Notifier Slack - Context ${context}`);

const payload = context.payload;
const filePath = core.getInput('path-to-file');

if (!filePath) {
    throw new Error('INVALID CONFIGURATION: Missing path to json file');
}

const runAction = async () => {
    if (filePath) {
        const fileContents = await fs.readFile(filePath);
        return JSON.parse(fileContents);
    }
};

runAction()
    .then(() => {
        core.info('OK!');
    })
    .catch(async (err) => {
        core.setFailed(err.message);
    });