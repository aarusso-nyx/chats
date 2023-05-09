/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateSubscriptionByUserId: OnCreateSubscriptionByUserIdSubscription;
  onCreateSubscribe: OnCreateSubscribeSubscription;
  onUpdateSubscribe: OnUpdateSubscribeSubscription;
  onDeleteSubscribe: OnDeleteSubscribeSubscription;
};

export type CreateSubscribeInput = {
  id?: string | null;
  topicId: string;
  userId: string;
  owner: string;
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

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Subscribe = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: Topic;
  userId: string;
  owner: string;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type Topic = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner: string;
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

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  owner: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topicId: string;
  topic: Topic;
  status?: ModelStatusConnection | null;
  createdAt: string;
  topicMessagesId?: string | null;
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
  message: Message;
  userId: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  messageStatusId?: string | null;
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

export type ModelTopicFilterInput = {
  id?: ModelIDInput | null;
  topic?: ModelStringInput | null;
  descr?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  n_msgs?: ModelIntInput | null;
  n_subs?: ModelIntInput | null;
  and?: Array<ModelTopicFilterInput | null> | null;
  or?: Array<ModelTopicFilterInput | null> | null;
  not?: ModelTopicFilterInput | null;
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

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection";
  items: Array<Topic | null>;
  nextToken?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  payload?: ModelStringInput | null;
  attachs?: ModelStringInput | null;
  topicId?: ModelIDInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
  topicMessagesId?: ModelIDInput | null;
};

export type ModelSubscribeFilterInput = {
  id?: ModelIDInput | null;
  topicId?: ModelIDInput | null;
  userId?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  expiresAt?: ModelStringInput | null;
  acked?: ModelBooleanInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelSubscribeFilterInput | null> | null;
  or?: Array<ModelSubscribeFilterInput | null> | null;
  not?: ModelSubscribeFilterInput | null;
  topicSubscriptionsId?: ModelIDInput | null;
};

export type ModelSubscriptionSubscribeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  topicId?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionStringInput | null;
  owner?: ModelSubscriptionStringInput | null;
  expiresAt?: ModelSubscriptionStringInput | null;
  acked?: ModelSubscriptionBooleanInput | null;
  active?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionSubscribeFilterInput | null> | null;
  or?: Array<ModelSubscriptionSubscribeFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
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
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateSubscribeMutation = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
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
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
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
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type MessagesByTopicAndCreatedAtQuery = {
  __typename: "Message";
  id: string;
  owner: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  status?: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      messageId: string;
      userId: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      messageStatusId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type TopicsByUserIdQuery = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner: string;
  n_msgs: number;
  n_subs: number;
  subscriptions?: {
    __typename: "ModelSubscribeConnection";
    items: Array<{
      __typename: "Subscribe";
      id: string;
      topicId: string;
      userId: string;
      owner: string;
      expiresAt?: string | null;
      acked: boolean;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      topicSubscriptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  messages?: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      owner: string;
      payload: string;
      attachs?: Array<string | null> | null;
      topicId: string;
      createdAt: string;
      topicMessagesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTopicQuery = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner: string;
  n_msgs: number;
  n_subs: number;
  subscriptions?: {
    __typename: "ModelSubscribeConnection";
    items: Array<{
      __typename: "Subscribe";
      id: string;
      topicId: string;
      userId: string;
      owner: string;
      expiresAt?: string | null;
      acked: boolean;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      topicSubscriptionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  messages?: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      owner: string;
      payload: string;
      attachs?: Array<string | null> | null;
      topicId: string;
      createdAt: string;
      topicMessagesId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTopicsQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  } | null>;
  nextToken?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  owner: string;
  payload: string;
  attachs?: Array<string | null> | null;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  status?: {
    __typename: "ModelStatusConnection";
    items: Array<{
      __typename: "Status";
      id: string;
      messageId: string;
      userId: string;
      active: boolean;
      createdAt: string;
      updatedAt: string;
      messageStatusId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  topicMessagesId?: string | null;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    owner: string;
    payload: string;
    attachs?: Array<string | null> | null;
    topicId: string;
    topic: {
      __typename: "Topic";
      id: string;
      topic: string;
      descr?: string | null;
      owner: string;
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
  } | null>;
  nextToken?: string | null;
};

export type GetSubscribeQuery = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type ListSubscribesQuery = {
  __typename: "ModelSubscribeConnection";
  items: Array<{
    __typename: "Subscribe";
    id: string;
    topicId: string;
    topic: {
      __typename: "Topic";
      id: string;
      topic: string;
      descr?: string | null;
      owner: string;
      n_msgs: number;
      n_subs: number;
      createdAt: string;
      updatedAt: string;
    };
    userId: string;
    owner: string;
    expiresAt?: string | null;
    acked: boolean;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    topicSubscriptionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateSubscriptionByUserIdSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type OnCreateSubscribeSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type OnUpdateSubscribeSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
  expiresAt?: string | null;
  acked: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type OnDeleteSubscribeSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  topic: {
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner: string;
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
  userId: string;
  owner: string;
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
  async CreateSubscribe(
    input: CreateSubscribeInput,
    condition?: ModelSubscribeConditionInput
  ): Promise<CreateSubscribeMutation> {
    const statement = `mutation CreateSubscribe($input: CreateSubscribeInput!, $condition: ModelSubscribeConditionInput) {
        createSubscribe(input: $input, condition: $condition) {
          __typename
          id
          topicId
          topic {
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
          topic {
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
          topic {
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
  async MessagesByTopicAndCreatedAt(
    topicId: string,
    createdAt: string
  ): Promise<Array<MessagesByTopicAndCreatedAtQuery>> {
    const statement = `query MessagesByTopicAndCreatedAt($topicId: ID!, $createdAt: AWSDateTime!) {
        messagesByTopicAndCreatedAt(topicId: $topicId, createdAt: $createdAt) {
          __typename
          id
          owner
          payload
          attachs
          topicId
          topic {
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
          status {
            __typename
            items {
              __typename
              id
              messageId
              userId
              active
              createdAt
              updatedAt
              messageStatusId
            }
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
    return <Array<MessagesByTopicAndCreatedAtQuery>>(
      response.data.messagesByTopicAndCreatedAt
    );
  }
  async TopicsByUserId(userId: string): Promise<Array<TopicsByUserIdQuery>> {
    const statement = `query TopicsByUserId($userId: String!) {
        topicsByUserId(userId: $userId) {
          __typename
          id
          topic
          descr
          owner
          n_msgs
          n_subs
          subscriptions {
            __typename
            items {
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
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              owner
              payload
              attachs
              topicId
              createdAt
              topicMessagesId
            }
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
    return <Array<TopicsByUserIdQuery>>response.data.topicsByUserId;
  }
  async GetTopic(id: string): Promise<GetTopicQuery> {
    const statement = `query GetTopic($id: ID!) {
        getTopic(id: $id) {
          __typename
          id
          topic
          descr
          owner
          n_msgs
          n_subs
          subscriptions {
            __typename
            items {
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
            nextToken
          }
          messages {
            __typename
            items {
              __typename
              id
              owner
              payload
              attachs
              topicId
              createdAt
              topicMessagesId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTopicQuery>response.data.getTopic;
  }
  async ListTopics(
    filter?: ModelTopicFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTopicsQuery> {
    const statement = `query ListTopics($filter: ModelTopicFilterInput, $limit: Int, $nextToken: String) {
        listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTopicsQuery>response.data.listTopics;
  }
  async GetMessage(id: string): Promise<GetMessageQuery> {
    const statement = `query GetMessage($id: ID!) {
        getMessage(id: $id) {
          __typename
          id
          owner
          payload
          attachs
          topicId
          topic {
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
          status {
            __typename
            items {
              __typename
              id
              messageId
              userId
              active
              createdAt
              updatedAt
              messageStatusId
            }
            nextToken
          }
          createdAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetMessageQuery>response.data.getMessage;
  }
  async ListMessages(
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListMessagesQuery> {
    const statement = `query ListMessages($filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            payload
            attachs
            topicId
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
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListMessagesQuery>response.data.listMessages;
  }
  async GetSubscribe(id: string): Promise<GetSubscribeQuery> {
    const statement = `query GetSubscribe($id: ID!) {
        getSubscribe(id: $id) {
          __typename
          id
          topicId
          topic {
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
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSubscribeQuery>response.data.getSubscribe;
  }
  async ListSubscribes(
    filter?: ModelSubscribeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSubscribesQuery> {
    const statement = `query ListSubscribes($filter: ModelSubscribeFilterInput, $limit: Int, $nextToken: String) {
        listSubscribes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            topicId
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
            userId
            owner
            expiresAt
            acked
            active
            createdAt
            updatedAt
            topicSubscriptionsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSubscribesQuery>response.data.listSubscribes;
  }
  OnCreateSubscriptionByUserIdListener(
    userId: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateSubscriptionByUserId">
    >
  > {
    const statement = `subscription OnCreateSubscriptionByUserId($userId: String!) {
        onCreateSubscriptionByUserId(userId: $userId) {
          __typename
          id
          topicId
          topic {
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
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateSubscriptionByUserId">
      >
    >;
  }

  OnCreateSubscribeListener(
    filter?: ModelSubscriptionSubscribeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubscribe">>
  > {
    const statement = `subscription OnCreateSubscribe($filter: ModelSubscriptionSubscribeFilterInput) {
        onCreateSubscribe(filter: $filter) {
          __typename
          id
          topicId
          topic {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubscribe">>
    >;
  }

  OnUpdateSubscribeListener(
    filter?: ModelSubscriptionSubscribeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubscribe">>
  > {
    const statement = `subscription OnUpdateSubscribe($filter: ModelSubscriptionSubscribeFilterInput) {
        onUpdateSubscribe(filter: $filter) {
          __typename
          id
          topicId
          topic {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubscribe">>
    >;
  }

  OnDeleteSubscribeListener(
    filter?: ModelSubscriptionSubscribeFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubscribe">>
  > {
    const statement = `subscription OnDeleteSubscribe($filter: ModelSubscriptionSubscribeFilterInput) {
        onDeleteSubscribe(filter: $filter) {
          __typename
          id
          topicId
          topic {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubscribe">>
    >;
  }
}
