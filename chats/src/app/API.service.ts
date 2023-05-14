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
  onCreateTopic: OnCreateTopicSubscription;
  onUpdateTopic: OnUpdateTopicSubscription;
  onDeleteTopic: OnDeleteTopicSubscription;
  onCreateMessage: OnCreateMessageSubscription;
  onUpdateMessage: OnUpdateMessageSubscription;
  onDeleteMessage: OnDeleteMessageSubscription;
  onCreateSubscribe: OnCreateSubscribeSubscription;
  onUpdateSubscribe: OnUpdateSubscribeSubscription;
  onDeleteSubscribe: OnDeleteSubscribeSubscription;
};

export type CreateTopicInput = {
  id?: string | null;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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

export type Topic = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection";
  items: Array<Message | null>;
  nextToken?: string | null;
};

export type Message = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: ModelStatusConnection | null;
  updatedAt: string;
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
  owner?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  messageStatusId?: string | null;
};

export type UpdateTopicInput = {
  id: string;
  topic?: string | null;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
};

export type DeleteTopicInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  topicMessagesId?: string | null;
};

export type ModelMessageConditionInput = {
  owner?: ModelStringInput | null;
  topicId?: ModelIDInput | null;
  payload?: ModelStringInput | null;
  attachs?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
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

export type UpdateMessageInput = {
  id: string;
  owner?: string | null;
  topicId?: string | null;
  payload?: string | null;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  topicMessagesId?: string | null;
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
  acked?: boolean | null;
  active?: boolean | null;
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

export type CognitoUser = {
  __typename: "CognitoUser";
  username: string;
  email?: string | null;
  name?: string | null;
  sub?: string | null;
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

export type ModelTopicConnection = {
  __typename: "ModelTopicConnection";
  items: Array<Topic | null>;
  nextToken?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  topicId?: ModelIDInput | null;
  payload?: ModelStringInput | null;
  attachs?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
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

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null;
  messageId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  acked?: ModelBooleanInput | null;
  active?: ModelBooleanInput | null;
  and?: Array<ModelStatusFilterInput | null> | null;
  or?: Array<ModelStatusFilterInput | null> | null;
  not?: ModelStatusFilterInput | null;
  messageStatusId?: ModelIDInput | null;
};

export type ModelSubscriptionTopicFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  topic?: ModelSubscriptionStringInput | null;
  descr?: ModelSubscriptionStringInput | null;
  n_msgs?: ModelSubscriptionIntInput | null;
  n_subs?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionTopicFilterInput | null> | null;
  or?: Array<ModelSubscriptionTopicFilterInput | null> | null;
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

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionMessageFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  topicId?: ModelSubscriptionIDInput | null;
  payload?: ModelSubscriptionStringInput | null;
  attachs?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionMessageFilterInput | null> | null;
  or?: Array<ModelSubscriptionMessageFilterInput | null> | null;
};

export type ModelSubscriptionSubscribeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  topicId?: ModelSubscriptionIDInput | null;
  userId?: ModelSubscriptionStringInput | null;
  expiresAt?: ModelSubscriptionStringInput | null;
  acked?: ModelSubscriptionBooleanInput | null;
  active?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionSubscribeFilterInput | null> | null;
  or?: Array<ModelSubscriptionSubscribeFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateTopicMutation = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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
  n_msgs?: number | null;
  n_subs?: number | null;
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

export type DeleteTopicMutation = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type UpdateMessageMutation = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type DeleteMessageMutation = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type CreateSubscribeMutation = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
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
  acked?: boolean | null;
  active?: boolean | null;
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
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type ListCognitoUsersQuery = {
  __typename: "CognitoUser";
  username: string;
  email?: string | null;
  name?: string | null;
  sub?: string | null;
};

export type GetTopicQuery = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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

export type ListTopicsQuery = {
  __typename: "ModelTopicConnection";
  items: Array<{
    __typename: "Topic";
    id: string;
    topic: string;
    descr?: string | null;
    owner?: string | null;
    n_msgs?: number | null;
    n_subs?: number | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetMessageQuery = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type ListMessagesQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    owner?: string | null;
    topicId: string;
    payload: string;
    attachs?: Array<string | null> | null;
    createdAt?: string | null;
    updatedAt: string;
    topicMessagesId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetSubscribeQuery = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
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
    userId: string;
    owner?: string | null;
    expiresAt?: string | null;
    acked?: boolean | null;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    topicSubscriptionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type MessagesByTopicIdAndCreatedAtQuery = {
  __typename: "ModelMessageConnection";
  items: Array<{
    __typename: "Message";
    id: string;
    owner?: string | null;
    topicId: string;
    payload: string;
    attachs?: Array<string | null> | null;
    createdAt?: string | null;
    updatedAt: string;
    topicMessagesId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SubscribesByTopicIdQuery = {
  __typename: "ModelSubscribeConnection";
  items: Array<{
    __typename: "Subscribe";
    id: string;
    topicId: string;
    userId: string;
    owner?: string | null;
    expiresAt?: string | null;
    acked?: boolean | null;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    topicSubscriptionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type SubscribesByUserIdQuery = {
  __typename: "ModelSubscribeConnection";
  items: Array<{
    __typename: "Subscribe";
    id: string;
    topicId: string;
    userId: string;
    owner?: string | null;
    expiresAt?: string | null;
    acked?: boolean | null;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    topicSubscriptionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type StatusesByMessageIdQuery = {
  __typename: "ModelStatusConnection";
  items: Array<{
    __typename: "Status";
    id: string;
    messageId: string;
    owner?: string | null;
    acked?: boolean | null;
    active?: boolean | null;
    createdAt: string;
    updatedAt: string;
    messageStatusId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTopicSubscription = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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

export type OnUpdateTopicSubscription = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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

export type OnDeleteTopicSubscription = {
  __typename: "Topic";
  id: string;
  topic: string;
  descr?: string | null;
  owner?: string | null;
  n_msgs?: number | null;
  n_subs?: number | null;
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

export type OnCreateMessageSubscription = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type OnUpdateMessageSubscription = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type OnDeleteMessageSubscription = {
  __typename: "Message";
  id: string;
  owner?: string | null;
  topicId: string;
  payload: string;
  attachs?: Array<string | null> | null;
  createdAt?: string | null;
  status?: {
    __typename: "ModelStatusConnection";
    nextToken?: string | null;
  } | null;
  updatedAt: string;
  topicMessagesId?: string | null;
};

export type OnCreateSubscribeSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type OnUpdateSubscribeSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

export type OnDeleteSubscribeSubscription = {
  __typename: "Subscribe";
  id: string;
  topicId: string;
  userId: string;
  owner?: string | null;
  expiresAt?: string | null;
  acked?: boolean | null;
  active?: boolean | null;
  createdAt: string;
  updatedAt: string;
  topicSubscriptionsId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
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
  async DeleteTopic(
    input: DeleteTopicInput,
    condition?: ModelTopicConditionInput
  ): Promise<DeleteTopicMutation> {
    const statement = `mutation DeleteTopic($input: DeleteTopicInput!, $condition: ModelTopicConditionInput) {
        deleteTopic(input: $input, condition: $condition) {
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
    return <DeleteTopicMutation>response.data.deleteTopic;
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
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
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
  async UpdateMessage(
    input: UpdateMessageInput,
    condition?: ModelMessageConditionInput
  ): Promise<UpdateMessageMutation> {
    const statement = `mutation UpdateMessage($input: UpdateMessageInput!, $condition: ModelMessageConditionInput) {
        updateMessage(input: $input, condition: $condition) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
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
    return <UpdateMessageMutation>response.data.updateMessage;
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
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
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
  async ListCognitoUsers(): Promise<Array<ListCognitoUsersQuery>> {
    const statement = `query ListCognitoUsers {
        listCognitoUsers {
          __typename
          username
          email
          name
          sub
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListCognitoUsersQuery>>response.data.listCognitoUsers;
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
          topicId
          payload
          attachs
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
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
            topicId
            payload
            attachs
            createdAt
            updatedAt
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
  async MessagesByTopicIdAndCreatedAt(
    topicId: string,
    createdAt?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelMessageFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<MessagesByTopicIdAndCreatedAtQuery> {
    const statement = `query MessagesByTopicIdAndCreatedAt($topicId: ID!, $createdAt: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelMessageFilterInput, $limit: Int, $nextToken: String) {
        messagesByTopicIdAndCreatedAt(
          topicId: $topicId
          createdAt: $createdAt
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            owner
            topicId
            payload
            attachs
            createdAt
            updatedAt
            topicMessagesId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      topicId
    };
    if (createdAt) {
      gqlAPIServiceArguments.createdAt = createdAt;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <MessagesByTopicIdAndCreatedAtQuery>(
      response.data.messagesByTopicIdAndCreatedAt
    );
  }
  async SubscribesByTopicId(
    topicId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSubscribeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SubscribesByTopicIdQuery> {
    const statement = `query SubscribesByTopicId($topicId: ID!, $sortDirection: ModelSortDirection, $filter: ModelSubscribeFilterInput, $limit: Int, $nextToken: String) {
        subscribesByTopicId(
          topicId: $topicId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      topicId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <SubscribesByTopicIdQuery>response.data.subscribesByTopicId;
  }
  async SubscribesByUserId(
    userId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSubscribeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SubscribesByUserIdQuery> {
    const statement = `query SubscribesByUserId($userId: String!, $sortDirection: ModelSortDirection, $filter: ModelSubscribeFilterInput, $limit: Int, $nextToken: String) {
        subscribesByUserId(
          userId: $userId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
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
      }`;
    const gqlAPIServiceArguments: any = {
      userId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <SubscribesByUserIdQuery>response.data.subscribesByUserId;
  }
  async StatusesByMessageId(
    messageId: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelStatusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<StatusesByMessageIdQuery> {
    const statement = `query StatusesByMessageId($messageId: ID!, $sortDirection: ModelSortDirection, $filter: ModelStatusFilterInput, $limit: Int, $nextToken: String) {
        statusesByMessageId(
          messageId: $messageId
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            messageId
            owner
            acked
            active
            createdAt
            updatedAt
            messageStatusId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      messageId
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <StatusesByMessageIdQuery>response.data.statusesByMessageId;
  }
  OnCreateTopicListener(
    filter?: ModelSubscriptionTopicFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTopic">>
  > {
    const statement = `subscription OnCreateTopic($filter: ModelSubscriptionTopicFilterInput, $owner: String) {
        onCreateTopic(filter: $filter, owner: $owner) {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTopic">>
    >;
  }

  OnUpdateTopicListener(
    filter?: ModelSubscriptionTopicFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTopic">>
  > {
    const statement = `subscription OnUpdateTopic($filter: ModelSubscriptionTopicFilterInput, $owner: String) {
        onUpdateTopic(filter: $filter, owner: $owner) {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTopic">>
    >;
  }

  OnDeleteTopicListener(
    filter?: ModelSubscriptionTopicFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTopic">>
  > {
    const statement = `subscription OnDeleteTopic($filter: ModelSubscriptionTopicFilterInput, $owner: String) {
        onDeleteTopic(filter: $filter, owner: $owner) {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTopic">>
    >;
  }

  OnCreateMessageListener(
    filter?: ModelSubscriptionMessageFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
  > {
    const statement = `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput, $owner: String) {
        onCreateMessage(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateMessage">>
    >;
  }

  OnUpdateMessageListener(
    filter?: ModelSubscriptionMessageFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
  > {
    const statement = `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput, $owner: String) {
        onUpdateMessage(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateMessage">>
    >;
  }

  OnDeleteMessageListener(
    filter?: ModelSubscriptionMessageFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
  > {
    const statement = `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput, $owner: String) {
        onDeleteMessage(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          topicId
          payload
          attachs
          createdAt
          status {
            __typename
            nextToken
          }
          updatedAt
          topicMessagesId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteMessage">>
    >;
  }

  OnCreateSubscribeListener(
    filter?: ModelSubscriptionSubscribeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubscribe">>
  > {
    const statement = `subscription OnCreateSubscribe($filter: ModelSubscriptionSubscribeFilterInput, $owner: String) {
        onCreateSubscribe(filter: $filter, owner: $owner) {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSubscribe">>
    >;
  }

  OnUpdateSubscribeListener(
    filter?: ModelSubscriptionSubscribeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubscribe">>
  > {
    const statement = `subscription OnUpdateSubscribe($filter: ModelSubscriptionSubscribeFilterInput, $owner: String) {
        onUpdateSubscribe(filter: $filter, owner: $owner) {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSubscribe">>
    >;
  }

  OnDeleteSubscribeListener(
    filter?: ModelSubscriptionSubscribeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubscribe">>
  > {
    const statement = `subscription OnDeleteSubscribe($filter: ModelSubscriptionSubscribeFilterInput, $owner: String) {
        onDeleteSubscribe(filter: $filter, owner: $owner) {
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
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSubscribe">>
    >;
  }
}
