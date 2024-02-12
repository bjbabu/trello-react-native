export interface BoardType {
  id: string;
  nodeId: string;
  name: string;
  desc: string | undefined;
  descData: null;
  closed: boolean;
  dateClosed: string | null;
  idOrganization: string;
  idEnterprise: null;
  limits: {
    attachments: {
      perBoard: DisWarn;
      perCard: DisWarn;
    };
    boards: {
      totalMembersPerBoard: DisWarn;
      totalAccessRequestsPerBoard: DisWarn;
    };
    cards: {
      openPerBoard: DisWarn;
      openPerList: DisWarn;
      totalPerBoard: DisWarn;
      totalPerList: DisWarn;
    };
    checklists: {
      perBoard: DisWarn;
      perCard: DisWarn;
    };
    checkItems: {
      perChecklist: DisWarn;
    };
    customFields: {
      perBoard: DisWarn;
    };
    customFieldOptions: {
      perField: DisWarn;
    };
    labels: {
      perBoard: DisWarn;
    };
    lists: {
      openPerBoard: DisWarn;
      totalPerBoard: DisWarn;
    };
    stickers: {
      perCard: DisWarn;
    };
    reactions: {
      perAction: DisWarn;
      uniquePerAction: DisWarn;
    };
  };
  pinned: boolean;
  starred: boolean;
  url: string;
  prefs: {
    permissionLevel: string;
    hideVotes: boolean;
    voting: string;
    comments: string;
    invitations: string;
    selfJoin: boolean;
    cardCovers: boolean;
    cardCounts: boolean;
    isTemplate: boolean;
    cardAging: string;
    calendarFeedEnabled: boolean;
    hiddenPluginBoardButtons: [];
    switcherViews: ViEn[];
    background: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundTile: boolean;
    backgroundBrightness: string;
    backgroundImageScaled: string | null;
    backgroundBottomColor: string;
    backgroundTopColor: string;
    canBePublic: boolean;
    canBeEnterprise: boolean;
    canBeOrg: boolean;
    canBePrivate: boolean;
    canInvite: boolean;
  };
  shortLink: string;
  subscribed: boolean;
  labelNames: {
    green: string | undefined;
    yellow: string | undefined;
    orange: string | undefined;
    red: string | undefined;
    purple: string | undefined;
    blue: string | undefined;
    sky: string | undefined;
    lime: string | undefined;
    pink: string | undefined;
    black: string | undefined;
    green_dark: string | undefined;
    yellow_dark: string | undefined;
    orange_dark: string | undefined;
    red_dark: string | undefined;
    purple_dark: string | undefined;
    blue_dark: string | undefined;
    sky_dark: string | undefined;
    lime_dark: string | undefined;
    pink_dark: string | undefined;
    black_dark: string | undefined;
    green_light: string | undefined;
    yellow_light: string | undefined;
    orange_light: string | undefined;
    red_light: string | undefined;
    purple_light: string | undefined;
    blue_light: string | undefined;
    sky_light: string | undefined;
    lime_light: string | undefined;
    pink_light: string | undefined;
    black_light: string | undefined;
  };
  powerUps: [];
  dateLastActivity: string;
  dateLastView: string;
  shortUrl: string;
  idTags: [];
  datePluginDisable: string | null;
  creationMethod: string | null;
  ixUpdate: string;
  templateGallery: string | null;
  enterpriseOwned: boolean;
  idBoardSource: string | null;
  premiumFeatures: string[];
  idMemberCreator: string;
  memberships: Membership[];
}

export interface DisWarn {
  status: string;
  disableAt: number;
  warnAt: number;
}

export interface ViEn {
  viewType: string;
  enabled: boolean;
}

export interface Membership {
  idMember: string;
  memberType: string;
  unconfirmed: boolean;
  deactivated: boolean;
  id: string;
}

export interface ListType {
  id: string;
  name: string;
  closed: boolean;
  color: null | undefined;
  idBoard: string;
  pos: number;
  subscribed: boolean;
}

export interface GetListType extends ListType {
  softLimit: null | undefined;
}

export interface PostListType extends ListType {
  limits: {
    attachments: {
      perBoard: DisWarn;
    };
  };
}

export interface GetCardType {
  id: string;
  address: string;
  badges: {
    attachmentsByType: {
      trello: {
        board: number;
        card: number;
      };
    };
    location: boolean;
    votes: number;
    viewingMemberVoted: boolean;
    subscribed: boolean;
    fogbugz: string;
    checkItems: number;
    checkItemsChecked: number;
    comments: number;
    attachments: number;
    description: boolean;
    due: string;
    start: string;
    dueComplete: boolean;
  };
  checkItemStates: string[];
  closed: boolean;
  coordinates: string;
  creationMethod: string;
  dateLastActivity: string;
  desc: string;
  descData: {
    emoji: Object;
  };
  due: string;
  dueReminder: string;
  email: string;
  idBoard: string;
  idChecklists: [
    {
      id: string;
    },
  ];
  idLabels: [
    {
      id: string;
      idBoard: string;
      name: string;
      color: string;
    },
  ];
  idList: string;
  idMembers: string[];
  idMembersVoted: string[];
  idShort: number;
  labels: string[];
  limits: {
    attachments: {
      perBoard: {};
    };
  };
  locationName: string;
  manualCoverAttachment: boolean;
  name: string;
  pos: number;
  shortLink: string;
  shortUrl: string;
  subscribed: boolean;
  url: string;
  cover: {
    color: string;
    idUploadedBackground: boolean;
    size: string;
    brightness: string;
    isTemplate: boolean;
  };
}

export interface PostCardType {
  id: '5abbe4b7ddc1b351ef961414';
  address: '<string>';
  badges: {
    attachmentsByType: {
      trello: {
        board: 2154;
        card: 2154;
      };
    };
    location: true;
    votes: 2154;
    viewingMemberVoted: false;
    subscribed: false;
    fogbugz: '<string>';
    checkItems: 0;
    checkItemsChecked: 0;
    comments: 0;
    attachments: 0;
    description: true;
    due: '<string>';
    start: '<string>';
    dueComplete: true;
  };
  checkItemStates: ['<string>'];
  closed: true;
  coordinates: '<string>';
  creationMethod: '<string>';
  dateLastActivity: '2019-09-16T16:19:17.156Z';
  desc: "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.";
  descData: {
    emoji: {};
  };
  due: '<string>';
  dueReminder: '<string>';
  email: 'bentleycook+2kea95u7kchsvqnxkwe+2q0byi6qv4pt9uc7q5m+25qyyohtzg@boards.trello.com';
  idBoard: '5abbe4b7ddc1b351ef961414';
  idChecklists: [
    {
      id: '5abbe4b7ddc1b351ef961414';
    },
  ];
  idLabels: [
    {
      id: '5abbe4b7ddc1b351ef961414';
      idBoard: '5abbe4b7ddc1b351ef961414';
      name: 'Overdue';
      color: 'yellow';
    },
  ];
  idList: '5abbe4b7ddc1b351ef961414';
  idMembers: ['5abbe4b7ddc1b351ef961414'];
  idMembersVoted: ['5abbe4b7ddc1b351ef961414'];
  idShort: 2154;
  labels: ['5abbe4b7ddc1b351ef961414'];
  limits: {
    attachments: {
      perBoard: {
        status: 'ok';
        disableAt: 36000;
        warnAt: 32400;
      };
    };
  };
  locationName: '<string>';
  manualCoverAttachment: false;
  name: '👋 What? Why? How?';
  pos: 65535;
  shortLink: 'H0TZyzbK';
  shortUrl: 'https://trello.com/c/H0TZyzbK';
  subscribed: false;
  url: 'https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how';
  cover: {
    color: 'yellow';
    idUploadedBackground: true;
    size: 'normal';
    brightness: 'light';
    isTemplate: false;
  };
}

export interface ShareType {
  filePath?: string;
  text?: string;
  weblink?: string;
  mimeType?: string;
  contentUri?: string;
  fileName?: string;
  extension?: string;
}

export type RootStackParamList = {
  Boards: undefined;
  Details: {boardData: BoardType};
};
