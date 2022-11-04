var path = require('path');
var http = require('http');
const express = require('express');
 
var retrieveFiles = express();

var hostname = '127.0.0.1';
var localport = 8000;

let Client = require('ssh2-sftp-client');

class SFTPClient {
  constructor() {
    this.client = new Client();
  }

  async connect(options) {
    console.log(`Connecting to ${options.host}:${options.port}`);
    try {
      await this.client.connect(options);
    } catch (err) {
      console.log('Failed to connect:', err);
    }
  }

  async disconnect() {
    await this.client.end();
  }

  async listFiles(remoteDir, fileGlob) {
    console.log(`Listing ${remoteDir} ...`);
    let fileObjects;
    try {
      fileObjects = await this.client.list(remoteDir, fileGlob);
    } catch (err) {
      console.log('Listing failed:', err);
    }

    const fileNames = [];

    for (const file of fileObjects) {
      if (file.type === 'd') {
        console.log(`${new Date(file.modifyTime).toISOString()} PRE ${file.name}`);
      } else {
        console.log(`${new Date(file.modifyTime).toISOString()} ${file.size} ${file.name}`);
      }

      fileNames.push(file.name);
    }

    return fileNames;
  }

  async uploadFile(localFile, remoteFile) {
    console.log(`Uploading ${localFile} to ${remoteFile} ...`);
    try {
      await this.client.put(localFile, remoteFile);
    } catch (err) {
      console.error('Uploading failed:', err);
    }
  }

  async downloadFile(remoteFile, localFile) {
    console.log(`Downloading ${remoteFile} to ${localFile} ...`);
    try {
      await this.client.get(remoteFile, localFile);
    } catch (err) {
      console.error('Downloading failed:', err);
    }
  }
  async deleteFile(remoteFile) {
    console.log(`Deleting ${remoteFile}`);
    try {
      await this.client.delete(remoteFile);
    } catch (err) {
      console.error('Deleting failed:', err);
    }
  }
}

var retrieveFiles = http.createServer(async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  const port = 22;
  const host = '34.81.217.13'
  const username = 'nicolejoseph'
  const privateKey = require('fs').readFileSync(path.resolve(__dirname, 'id_rsa'))

  //* Open the connection
  const client = new SFTPClient();
  await client.connect({ host, port, username, privateKey });

  //* Download remote file to local file
  await client.downloadFile("/home/pratyushghosh14/angleList.txt", path.resolve(__dirname, "./data/angleList.txt"));
  await client.downloadFile("/home/pratyushghosh14/UserActivity.txt", path.resolve(__dirname, "./data/UserActivity.txt"));

  console.log(`Downloads complete`);

  //* Close the connection
  await client.disconnect();

  res.end(
    JSON.stringify({
      status: "success",
    })
  );
});

retrieveFiles.listen(localport, hostname);

