CREATE TABLE [dbo].[ToDos] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [TaskId] INT           NOT NULL,
    [Title]  VARCHAR (200) NOT NULL,
    [Order]  SMALLINT      DEFAULT ((0)) NOT NULL,
    [Done]   BIT           DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ToDos_ToTask] FOREIGN KEY ([TaskId]) REFERENCES [dbo].[Tasks] ([Id]) ON DELETE CASCADE
);

