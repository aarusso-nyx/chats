/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";
import { AuthService } from "./auth.service";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onSubscribed: OnSubscribedSubscription;
};

export type MessageInput = {
  owner: string;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topic: Topic;
  status?: ModelStatusConnection | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type Topic = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs: number;
  n_subs: number;
  subscriptions?: ModelSubscribeConnection | null;
  messages?: ModelMessageConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelSubscribeConnection = {
  __typename: "ModelSubscribeConnection";
  items: Array<Subscribe | null>;
  nextToken?: string | null;
};

export type Subscribe = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type ModelStatusConnection = {
  __typename: "ModelStatusConnection";
  items: Array<Status | null>;
  nextToken?: string | null;
};

export type Status = {
  __typename: "Status";
  id: string;
  messageId: string;
  owner?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  messageStatusId?: string | null;
};

export type CreateTopicInput = {
  id?: string | null;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs: number;
  n_subs: number;
};

export type ModelTopicConditionInput = {
  topic?: ModelStringInput | null;
  descr?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  n_msgs?: ModelIntInput | null;
  n_subs?: ModelIntInput | null;
  and?: Array<ModelTopicConditionInput | null> | null;
  or?: Array<ModelTopicConditionInput | null> | null;
  not?: ModelTopicConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateTopicInput = {
  id: string;
  topic?: string | null;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
};

export type CreateMessageInput = {
  id?: string | null;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topicMessagesId?: string | null;
};

export type ModelMessageConditionInput = {
  owner?: ModelStringInput | null;
  topicId?: ModelIDInput | null;
  payload?: ModelStringInput | null;
  attachs?: ModelStringInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
  topicMessagesId?: ModelIDInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type CreateSubscribeInput = {
  id?: string | null;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  topicSubscriptionsId?: string | null;
};

export type ModelSubscribeConditionInput = {
  topicId?: ModelIDInput | null;
  userId?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  expiresAt?: ModelStringInput | null;
  acked?: ModelBooleanInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelSubscribeConditionInput | null> | null;
  or?: Array<ModelSubscribeConditionInput | null> | null;
  not?: ModelSubscribeConditionInput | null;
  topicSubscriptionsId?: ModelIDInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateSubscribeInput = {
  id: string;
  topicId?: string | null;
  userId?: string | null;
  owner?: string | null;
  expiresAt?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
  topicSubscriptionsId?: string | null;
};

export type DeleteSubscribeInput = {
  id: string;
};

export type PostMessageMutation = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner?: string | null;
    n_msgs: number;
    n_subs: number;
    createdAt: string;
    updatedAt: string;
  };
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type CreateTopicMutation = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs: number;
  n_subs: number;
  subscriptions?: {
    __typename: "ModelSubscribeConnection";
    nextToken?: string | null;
  } | null;
  messages?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTopicMutation = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs: number;
  n_subs: number;
  subscriptions?: {
    __typename: "ModelSubscribeConnection";
    nextToken?: string | null;
  } | null;
  messages?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateMessageMutation = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner?: string | null;
    n_msgs: number;
    n_subs: number;
    createdAt: string;
    updatedAt: string;
  };
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner?: string | null;
    n_msgs: number;
    n_subs: number;
    createdAt: string;
    updatedAt: string;
  };
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type CreateSubscribeMutation = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type UpdateSubscribeMutation = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type DeleteSubscribeMutation = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type FetchFromQuery = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner?: string | null;
    n_msgs: number;
    n_subs: number;
    createdAt: string;
    updatedAt: string;
  };
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type TopicsOfQuery = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs: number;
  n_subs: number;
  subscriptions?: {
    __typename: "ModelSubscribeConnection";
    nextToken?: string | null;
  } | null;
  messages?: {
    __typename: "ModelMessageConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnSubscribedSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {

  async PostMessage(message: MessageInput): Promise<PostMessageMutation> {
    const statement = `mutation PostMessage($message: MessageInput!) {
        postMessage(message: $message) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          topic {
            __typename
            id
            topic
            descr
            owner
            n_msgs
            n_subs
            createdAt
            updatedAt
          }
          status {
            __typename
            nextToken
          }
          createdAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      message
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <PostMessageMutation>response.data.postMessage;
  }
  async CreateTopic(
    input: CreateTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<CreateTopicMutation> {
    const statement = `mutation CreateTopic($input: CreateTopicInput!, $condition: ModelTopicConditionInput) {
        createTopic(input: $input, condition: $condition) {
          __typename
          id
          topic
          descr
          owner
          n_msgs
          n_subs
          subscriptions {
            __typename
            nextToken
          }
          messages {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTopicMutation>response.data.createTopic;
  }
  async UpdateTopic(
    input: UpdateTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<UpdateTopicMutation> {
    const statement = `mutation UpdateTopic($input: UpdateTopicInput!, $condition: ModelTopicConditionInput) {
        updateTopic(input: $input, condition: $condition) {
          __typename
          id
          topic
          descr
          owner
          n_msgs
          n_subs
          subscriptions {
            __typename
            nextToken
          }
          messages {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTopicMutation>response.data.updateTopic;
  }
  async CreateMessage(
    input: CreateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<CreateMessageMutation> {
    const statement = `mutation CreateMessage($input: CreateMessageInput!, $condition: ModelMessageConditionInput) {
        createMessage(input: $input, condition: $condition) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          topic {
            __typename
            id
            topic
            descr
            owner
            n_msgs
            n_subs
            createdAt
            updatedAt
          }
          status {
            __typename
            nextToken
          }
          createdAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateMessageMutation>response.data.createMessage;
  }
  async DeleteMessage(
    input: DeleteMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<DeleteMessageMutation> {
    const statement = `mutation DeleteMessage($input: DeleteMessageInput!, $condition: ModelMessageConditionInput) {
        deleteMessage(input: $input, condition: $condition) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          topic {
            __typename
            id
            topic
            descr
            owner
            n_msgs
            n_subs
            createdAt
            updatedAt
          }
          status {
            __typename
            nextToken
          }
          createdAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteMessageMutation>response.data.deleteMessage;
  }
  async CreateSubscribe(
    input: CreateSubscribeInput,
    condition?: ModelSubscribeConditionInput
  ): Promise<CreateSubscribeMutation> {
    const statement = `mutation CreateSubscribe($input: CreateSubscribeInput!, $condition: ModelSubscribeConditionInput) {
        createSubscribe(input: $input, condition: $condition) {
          __typename
          id
          topicId
          userId
          owner
          expiresAt
          acked
          active
          createdAt
          updatedAt
          topicSubscriptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSubscribeMutation>response.data.createSubscribe;
  }
  async UpdateSubscribe(
    input: UpdateSubscribeInput,
    condition?: ModelSubscribeConditionInput
  ): Promise<UpdateSubscribeMutation> {
    const statement = `mutation UpdateSubscribe($input: UpdateSubscribeInput!, $condition: ModelSubscribeConditionInput) {
        updateSubscribe(input: $input, condition: $condition) {
          __typename
          id
          topicId
          userId
          owner
          expiresAt
          acked
          active
          createdAt
          updatedAt
          topicSubscriptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSubscribeMutation>response.data.updateSubscribe;
  }
  async DeleteSubscribe(
    input: DeleteSubscribeInput,
    condition?: ModelSubscribeConditionInput
  ): Promise<DeleteSubscribeMutation> {
    const statement = `mutation DeleteSubscribe($input: DeleteSubscribeInput!, $condition: ModelSubscribeConditionInput) {
        deleteSubscribe(input: $input, condition: $condition) {
          __typename
          id
          topicId
          userId
          owner
          expiresAt
          acked
          active
          createdAt
          updatedAt
          topicSubscriptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSubscribeMutation>response.data.deleteSubscribe;
  }
  async FetchFrom(
    topicId: string,
    createdAt: string
  ): Promise<Array<FetchFromQuery>> {
    const statement = `query FetchFrom($topicId: ID!, $createdAt: AWSDateTime!) {
        fetchFrom(topicId: $topicId, createdAt: $createdAt) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          topic {
            __typename
            id
            topic
            descr
            owner
            n_msgs
            n_subs
            createdAt
            updatedAt
          }
          status {
            __typename
            nextToken
          }
          createdAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      topicId,
      createdAt
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<FetchFromQuery>>response.data.fetchFrom;
  }
  async TopicsOf(userId: string): Promise<Array<TopicsOfQuery>> {
    const statement = `query TopicsOf($userId: String!) {
        topicsOf(userId: $userId) {
          __typename
          id
          topic
          descr
          owner
          n_msgs
          n_subs
          subscriptions {
            __typename
            nextToken
          }
          messages {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<TopicsOfQuery>>response.data.topicsOf;
  }
  OnSubscribedListener(
    userId: string
  ) {
    const statement = `subscription OnSubscribed($userId: String!) {
        onSubscribed(userId: $userId) {
          __typename
          id
          topicId
          userId
          owner
          expiresAt
          acked
          active
          createdAt
          updatedAt
          topicSubscriptionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )
  }
}
