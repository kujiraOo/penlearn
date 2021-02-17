/* eslint-disable no-console */

const functionThatThrowsError = () => {
  throw new Error('Some error');
};

// this will thor an error
// functionThatThrowsError();

const functionThatCatchesError = () => {
  try {
    functionThatThrowsError();
  } catch (error) {
    console.log(error.message);
  }
};

functionThatCatchesError();

const fetchGamblingAttachments = () => {};
const fetchDrinkingAttachments = () => {};
const fetchThrowingUpAttachments = () => {};

const gamblingAttachmentType = 'gambling-attachment';
const drinkingAttachmentType = 'drinking-attachment';
const throwingUpAttachmentType = 'throwing-up-attachment';

const listAttachments = (type) => {
  switch (type) {
    case gamblingAttachmentType: {
      return fetchGamblingAttachments();
    }
    case drinkingAttachmentType: {
      return fetchDrinkingAttachments();
    }
    case throwingUpAttachmentType: {
      return fetchThrowingUpAttachments();
    } default: {
      throw new Error(`Unsupported attachment type: ${type}`);
    }
  }
};

listAttachments(gamblingAttachmentType);
